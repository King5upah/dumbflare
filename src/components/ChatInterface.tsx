import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send } from 'lucide-react';
import { useLocale } from '../lib/LocaleContext';
import { classifyIntent, detectWrittenLanguage, nlpLabel } from '../lib/NLPEngine';
import { getLocale } from '../lib/i18n';
import type { Mood, Script, Locale } from '../lib/i18n/types';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
}

interface ChatInterfaceProps {
  onSequenceComplete: () => void;
}

const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ onSequenceComplete }) => {
  const { locale, data } = useLocale();
  const { chatScripts, ui } = data;

  const MOODS = Object.keys(chatScripts) as Mood[];
  const personality = useRef<Mood>(pick(MOODS));
  const script: Script = chatScripts[personality.current];

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [convStep, setConvStep] = useState(0);
  const [locked, setLocked] = useState(false);
  const [activeLocale, setActiveLocale] = useState<Locale>(locale);
  const scrollRef = useRef<HTMLDivElement>(null);
  const langVotes = useRef<Partial<Record<Locale, number>>>({});

  const activeData = activeLocale === locale ? data : getLocale(activeLocale);
  const activeScript: Script = activeData.chatScripts[personality.current];

  const addMessage = (text: string, sender: 'bot' | 'user') =>
    setMessages(prev => [...prev, { id: Math.random().toString(36).substring(2), text, sender }]);

  useEffect(() => {
    const init = async () => {
      setIsTyping(true);
      await sleep(800);
      setIsTyping(false);
      addMessage(ui.initiatingProtocol, 'bot');
      setIsTyping(true);
      await sleep(900 + Math.random() * 400);
      setIsTyping(false);
      addMessage(pick(activeData.chatScripts[personality.current].opener), 'bot');
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

    // Written language detection — vote and switch after 2 consistent signals
    const detected = detectWrittenLanguage(userText);
    if (detected) {
      const votes = langVotes.current;
      votes[detected] = (votes[detected] ?? 0) + 1;
      if (detected !== activeLocale && (votes[detected] ?? 0) >= 2) {
        setActiveLocale(detected);
      }
    }

    const step = (convStep + 1) as 1 | 2 | 3;
    setConvStep(step);
    const intent = classifyIntent(userText, activeLocale);
    const currentScript = activeData.chatScripts[personality.current];

    setIsTyping(true);
    await sleep(900 + Math.random() * 700);
    setIsTyping(false);

    addMessage(pick(currentScript.step[step][intent]), 'bot');

    if (step === 3) {
      setIsTyping(true);
      await sleep(1000 + Math.random() * 400);
      setIsTyping(false);
      setLocked(true);
      addMessage(pick(currentScript.final), 'bot');
      setTimeout(onSequenceComplete, 1800);
    }
  };

  return (
    <div className="flex flex-col h-[430px] w-full bg-black/45 backdrop-blur-xl border border-white/8 rounded-2xl overflow-hidden shadow-2xl">
      <div className="px-4 py-3 border-b border-white/8 bg-white/3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot size={15} className="text-orange-400" />
          <span className="text-xs font-mono text-white/60 tracking-wide">{ui.terminalName}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
            NLP · {nlpLabel(activeLocale)}
            {activeLocale !== locale && (
              <span className="text-orange-400/60 ml-1">↺</span>
            )}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[9px] font-mono text-orange-400/60 uppercase tracking-widest">
              {locked ? ui.escalating : ui.scanning}
            </span>
          </div>
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
          placeholder={locked ? ui.preparingNextPhase : ui.proveHumanity}
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
