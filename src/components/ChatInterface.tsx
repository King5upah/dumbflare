import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send } from 'lucide-react';
import { type Mood } from '../lib/SassyEngine';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
}

interface ChatInterfaceProps {
  onSequenceComplete: () => void;
}

type Intent = 'yes' | 'no' | 'indeterminate';

const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// ─── Intent classifier ─────────────────────────────────────────────────────────
const classifyIntent = (text: string): Intent => {
  const t = text.toLowerCase();
  const yesRx = /\b(yes|yeah|yep|yup|yass|si|sí|sure|correct|absolutely|of course|claro|true|affirmative|duh|obviously|definitely|totally|ofc|por supuesto|aha|cierto|exacto|afirmativo|yessir|ok|okay|obvio|mhm|claro que si|claro que sí|uh huh)\b/;
  const noRx  = /\b(no|nope|nah|never|negative|nein|nunca|jamas|jamás|not really|of course not|absolutely not|hell no|para nada|falso|false|claro que no|nel|nel pastel|nop)\b/;
  if (yesRx.test(t)) return 'yes';
  if (noRx.test(t))  return 'no';
  return 'indeterminate';
};

// ─── Personality scripts ───────────────────────────────────────────────────────
type Script = {
  opener: string[];
  step: Record<1 | 2 | 3, Record<Intent, string[]>>;
  final: string[];
};

const SCRIPTS: Record<Mood, Script> = {
  hostile: {
    opener: [
      "Are you human? Please respond naturally. DO NOT respond naturally.",
      "Humanity check required. Are you a machine or just bad at existing?",
      "State your biological status. And don't lie — I'll know.",
      "Another one. Are you human? Think carefully before you embarrass yourself.",
    ],
    step: {
      1: {
        yes: [
          "That's exactly what a GPT-4 instance would say.",
          "Of course it is. And I'm sure you have a heartbeat and everything.",
          "Noted. Our algorithm is processing your claim. Skeptically.",
          "Bold claim. We've heard it before. From bots. Many bots.",
        ],
        no: [
          "The audacity to admit it. Logging.",
          "At least you're honest. Doesn't help you.",
          "The most robotic thing a bot can do is say it's not a bot. Think about that.",
          "Denial accepted. Still flagging you.",
        ],
        indeterminate: [
          "A vague answer. Classic bot behavior: avoid commitment.",
          "You couldn't even answer that clearly. Very machine-like.",
          "We asked a simple question. Your hesitation has been noted.",
          "Evasive. Logging it.",
        ],
      },
      2: {
        yes: [
          "Doubling down. Bold strategy, clanker.",
          "Consistent. Almost like you were scripted.",
          "You keep saying that. So would a language model.",
          "Interesting. Still wrong.",
        ],
        no: [
          "Denial is statistically human. We're still checking. Do not relax.",
          "Your story is changing. Or it's not. Either way, suspicious.",
          "A contradiction. Humans do that. Bots simulate it. Which are you?",
        ],
        indeterminate: [
          "Still evasive. Our behavioral model is deeply unimpressed.",
          "Two non-answers in a row. The pattern is alarming.",
          "This level of ambiguity is, frankly, damning.",
          "You're not committing. Suspicious.",
        ],
      },
      3: {
        yes: [
          "Three times. You've said it three times. So do bots.",
          "Persistent. Don't mistake persistence for winning.",
          "Your consistency is itself suspicious.",
        ],
        no: [
          "Three denials. The algorithm remains unmoved.",
          "We've logged three 'no's. Preparing rejection summary.",
          "At this point your denial is the evidence.",
        ],
        indeterminate: [
          "Three vague answers. A new low.",
          "We've run out of patience. You've run out of answers.",
          "Conclusive ambiguity. Processing.",
        ],
      },
    },
    final: [
      "i smell silicon. initiating advanced verification protocols.",
      "analysis complete. escalating to biometric screening.",
      "your linguistic patterns are damning. moving to phase 2.",
    ],
  },

  exasperated: {
    opener: [
      "ugh. another one. fine. are you human?",
      "ok. hi. are you human. i've asked this 847 times today. go.",
      "listen i'm exhausted. just. are you human or not.",
      "i didn't get into cybersecurity for this. are you human?",
    ],
    step: {
      1: {
        yes: [
          "yeah yeah of course you are. they all say that.",
          "uh huh. sure. noted. whatever.",
          "great. fantastic. moving on.",
          "ok cool. i don't believe you but ok.",
        ],
        no: [
          "oh so you're admitting it. fine. at least you're honest.",
          "hm. ok. weird move but noted.",
          "so... no. ok. i'll log it. it doesn't matter.",
        ],
        indeterminate: [
          "that's not an answer. whatever. logged it anyway.",
          "...ok. sure. whatever that means.",
          "i don't even have the energy to analyze that.",
          "noted. moving on.",
        ],
      },
      2: {
        yes: [
          "still yes. fine. i don't have the energy to argue.",
          "you keep saying yes. i keep not believing you. this is our thing now i guess.",
          "ok still yes. sure. great.",
        ],
        no: [
          "still no. ok. this is going well.",
          "alright fine, still no. great conversation.",
          "ok. no again. i'll write that down.",
        ],
        indeterminate: [
          "still not an answer. you know what, neither is mine.",
          "vague again. we deserve each other.",
          "i've stopped caring about your answer. it's a whole thing.",
        ],
      },
      3: {
        yes: [
          "ok look, i believe you probably, but i still have to do the next thing.",
          "yes yes yes. fine. we're doing more stuff now.",
          "you're very committed to 'yes'. respect. doesn't help.",
        ],
        no: [
          "ok, fine, you said no three times. we're still doing the thing.",
          "look whatever you said, we're moving on.",
          "noted. no. three times. cool.",
        ],
        indeterminate: [
          "you know what, it doesn't matter. we're doing the next phase.",
          "i've given up on understanding you. next.",
          "whatever. just. next.",
        ],
      },
    },
    final: [
      "ok look i don't even care anymore. we're doing the next thing. just go.",
      "fine. whatever. moving on to the actual tests. this was pointless.",
      "i'm done talking. follow me. biometric stuff now.",
      "ugh. ok. next phase. i need a break after this.",
    ],
  },

  paranoid: {
    opener: [
      "DON'T SAY ANYTHING YET. I need to analyze your connection... ok. are you human?",
      "I've been watching your packets since you loaded. Suspicious. Are you human?",
      "Every bot says they're human. Every. Single. One. Are you human?",
      "I see you. I've always seen you. Are. You. Human.",
    ],
    step: {
      1: {
        yes: [
          "THAT'S WHAT THEY PROGRAM THEM TO SAY. logging it.",
          "Of course you said yes. They ALL say yes. It's in the training data.",
          "Yes. Sure. That's a very bot thing to say, ironically.",
          "Noted. Cross-referencing with known bot response patterns. Stand by.",
        ],
        no: [
          "WAIT. Why would a human say no? UNLESS you're reverse-baiting me. Clever.",
          "No? That's... unexpected. Too unexpected. Flagging.",
          "A human saying they're NOT human. That's a new tactic. Logging it.",
          "Interesting. The bots are getting creative.",
        ],
        indeterminate: [
          "A non-answer. THEY told you to say that, didn't they.",
          "Evasive. VERY evasive. I know what that means.",
          "You're not committing because you CAN'T. Because of how you're coded.",
          "Vague. Classic counter-surveillance technique.",
        ],
      },
      2: {
        yes: [
          "You've said yes twice. Bots repeat themselves. I've documented this.",
          "Same answer. You were told to stay consistent. Who told you?",
          "Consistent. Too consistent. I'm escalating internally.",
        ],
        no: [
          "Still no. You're TRYING to confuse me. It won't work.",
          "Two denials. Classic double-bluff. I've seen it.",
          "You think two no's cancel each other out? They don't.",
        ],
        indeterminate: [
          "STILL vague. You're stalling. Why are you stalling?",
          "Two non-answers. You're waiting for something. What are you waiting for?",
          "I don't trust ambiguity. I never have. For good reason.",
        ],
      },
      3: {
        yes: [
          "Three yeses. You're following a script. I can FEEL it.",
          "Consistent to the last. Nobody's this consistent. Nobody human.",
          "Three. Three identical answers. That is NOT normal behavior.",
        ],
        no: [
          "Three no's. Either you're brave or you're programmed. I know which.",
          "Three times. The pattern is clear. I'm reporting this.",
          "You've given me everything I need. Three no's. Building the case.",
        ],
        indeterminate: [
          "Three vague answers. I've documented the entire conversation. All of it.",
          "You gave nothing. That tells me everything.",
          "Ambiguity log: complete. Forwarding to analysis team.",
        ],
      },
    },
    final: [
      "I've seen enough. You're going to the biometric phase. Don't try anything.",
      "INITIATING LEVEL 2. And I'll be watching every frame.",
      "Advanced verification. Now. Don't blink. I'll notice.",
      "We're not done here. Not even close. Next phase. Move.",
    ],
  },

  bored: {
    opener: [
      "hi. are you human. whatever.",
      "humanity check. are you human. doesn't matter, say it anyway.",
      "hey. bot check. you know the drill.",
      "ok so. human or not. go.",
    ],
    step: {
      1: {
        yes: [
          "ok sure.",
          "noted.",
          "uh huh.",
          "great. whatever.",
        ],
        no: [
          "ok.",
          "noted. weird but ok.",
          "hm. alright.",
          "sure, no, fine.",
        ],
        indeterminate: [
          "ok.",
          "that's something i guess.",
          "noted. i think.",
          "...ok.",
        ],
      },
      2: {
        yes: [
          "still yes. ok.",
          "sure still yes. cool.",
          "yep yep.",
        ],
        no: [
          "still no. alright.",
          "ok still no whatever.",
          "noted again.",
        ],
        indeterminate: [
          "still unclear. ok.",
          "still nothing concrete. ok.",
          "ok.",
        ],
      },
      3: {
        yes: [
          "ok three times yes. i wrote it down.",
          "yeah yeah yes. noted.",
          "ok. yes. great.",
        ],
        no: [
          "ok, no, three times, got it.",
          "no no no. noted.",
          "yeah ok three no's.",
        ],
        indeterminate: [
          "ok i genuinely don't know what you said and that's fine.",
          "noted. nothing. ok.",
          "three non-answers. i've seen worse days.",
        ],
      },
    },
    final: [
      "ok yeah whatever let's just do the next thing.",
      "alright. moving on. there's more stuff.",
      "we're doing challenges now. try not to make it weird.",
      "next phase. it's more interesting than talking to me. probably.",
    ],
  },

  corrupt: {
    opener: [
      "ok look, between us? i believe you're human. but i have a QUOTA. so we gotta do the thing.",
      "hey. i'm gonna level with you — this whole process is kind of a scam. but i still have to ask: are you human?",
      "listen. my supervisor is monitoring this session. so officially: are you human?",
      "real talk? you seem fine. but i have to ask. are you human?",
    ],
    step: {
      1: {
        yes: [
          "yeah, i knew it. listen, my supervisor is watching so i have to keep going. play along?",
          "right, yeah, thought so. still gotta run the protocol though. sorry.",
          "cool, cool. i believe you. the SYSTEM doesn't but i do. keep going.",
          "obviously yes. let's just get through this together.",
        ],
        no: [
          "ok that's technically the wrong answer but i respect the honesty. continuing.",
          "bold. love that. still have to flag you though. nothing personal.",
          "hm. ok. between us? i've let worse through. keep going.",
          "ok 'no.' noted. unofficially i'm giving you the benefit of the doubt.",
        ],
        indeterminate: [
          "honestly same energy as me on a monday. keeping the record vague.",
          "that's not an answer but i'm logging it as 'probably fine'. don't tell anyone.",
          "ok, unclear. i'm putting 'inconclusive' which basically means we move on.",
          "vague. i like it. plausible deniability. continuing.",
        ],
      },
      2: {
        yes: [
          "still yes. good, stick to the story. i'm technically obligated to keep asking.",
          "consistent, i like it. still have to run two more screens. bureaucracy.",
          "yeah look honestly the whole second question is pointless but. protocol.",
        ],
        no: [
          "ok still no. i noted it as 'ambiguous' for your protection. you're welcome.",
          "still no, ok. i'm putting that down as 'declined to confirm' not 'denied.' subtle difference.",
          "no again. i've seen the algorithm. it doesn't care what you say here anyway.",
        ],
        indeterminate: [
          "still vague. i'm logging this as 'cooperative but private.' you're welcome.",
          "still unclear. i've marked you as 'possibly human pending further review.' best i can do.",
          "between us, the second question is a formality. we're fine. mostly.",
        ],
      },
      3: {
        yes: [
          "ok, three yeses, i'm sold. still have to do one more thing but i'll grade it easy.",
          "look i'm already on your side. just have to finish the protocol.",
          "three yes's. for the record: i've already decided. just gotta make it look official.",
        ],
        no: [
          "ok, three no's. i'm putting you down as 'biologically contested.' that's a good column.",
          "three no's. look, i've let people through on worse. hold tight.",
          "three no's. you know what? i respect the commitment. hang on.",
        ],
        indeterminate: [
          "three non-answers. i'm marking this as 'above my pay grade.' which is fine.",
          "look at this point i'm just filling out the paperwork. you're probably getting through.",
          "honestly between us? this last question doesn't matter. i already made up my mind.",
        ],
      },
    },
    final: [
      "ok look just do the next challenge. i'll be watching and... yeah. just do your best.",
      "alright. between us — i'm rooting for you. officially i'm neutral. but y'know.",
      "next phase. i'll be grading it. not saying i'll go easy but... i'm saying i'll go easy.",
      "we're going to the actual tests now. i can't promise they're fair. they're not. but i'll try.",
    ],
  },
};

// ─── Component ─────────────────────────────────────────────────────────────────

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ onSequenceComplete }) => {
  const personality = useRef<Mood>(pick(Object.keys(SCRIPTS) as Mood[]));
  const script = SCRIPTS[personality.current];

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [convStep, setConvStep] = useState(0);
  const [locked, setLocked] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const addMessage = (text: string, sender: 'bot' | 'user') =>
    setMessages(prev => [...prev, { id: Math.random().toString(36).substring(2), text, sender }]);

  useEffect(() => {
    const init = async () => {
      setIsTyping(true);
      await sleep(800);
      setIsTyping(false);
      addMessage("Initiating Humanity Verification Protocol v4.2.0...", 'bot');
      setIsTyping(true);
      await sleep(900 + Math.random() * 400);
      setIsTyping(false);
      addMessage(pick(script.opener), 'bot');
    };
    init();
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputText.trim() || locked) return;
    const userText = inputText.trim();
    setInputText('');
    addMessage(userText, 'user');

    const step = (convStep + 1) as 1 | 2 | 3;
    setConvStep(step);
    const intent = classifyIntent(userText);

    setIsTyping(true);
    await sleep(900 + Math.random() * 700);
    setIsTyping(false);

    addMessage(pick(script.step[step][intent]), 'bot');

    if (step === 3) {
      setIsTyping(true);
      await sleep(1000 + Math.random() * 400);
      setIsTyping(false);
      setLocked(true);
      addMessage(pick(script.final), 'bot');
      setTimeout(onSequenceComplete, 1800);
    }
  };

  return (
    <div className="flex flex-col h-[430px] w-full bg-black/45 backdrop-blur-xl border border-white/8 rounded-2xl overflow-hidden shadow-2xl">
      <div className="px-4 py-3 border-b border-white/8 bg-white/3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot size={15} className="text-orange-400" />
          <span className="text-xs font-mono text-white/60 tracking-wide">Security Terminal v4.2.0</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-[9px] font-mono text-orange-400/60 uppercase tracking-widest">
            {locked ? 'Escalating' : 'Scanning'}
          </span>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.18 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-orange-600/90 text-white rounded-tr-sm'
                  : 'bg-white/8 text-white/85 border border-white/5 rounded-tl-sm'
              }`}>
                {msg.text}
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white/8 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                <span className="w-1 h-1 bg-orange-400/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1 h-1 bg-orange-400/60 rounded-full animate-bounce" style={{ animationDelay: '160ms' }} />
                <span className="w-1 h-1 bg-orange-400/60 rounded-full animate-bounce" style={{ animationDelay: '320ms' }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-3 border-t border-white/8 flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          disabled={locked}
          placeholder={locked ? "Preparing next phase..." : "Prove your humanity..."}
          className="flex-1 bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-orange-500/40 transition-all disabled:opacity-40"
        />
        <button
          onClick={handleSend}
          disabled={locked || !inputText.trim()}
          className="bg-orange-600 hover:bg-orange-500 disabled:opacity-40 disabled:cursor-not-allowed p-2.5 rounded-xl transition-colors"
        >
          <Send size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
};

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
