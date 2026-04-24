import type { LocaleData } from './types';

const en: LocaleData = {
  passLines: [
    { title: 'VERIFICATION: PASSED', body: "We don't know how. The team is investigating." },
    { title: 'SUSPICIOUS SUCCESS', body: 'You passed. This will be reviewed.' },
    { title: 'OUTCOME: GRUDGINGLY ACCEPTED', body: "The algorithm passed you. The algorithm may be wrong." },
    { title: 'ANOMALOUS CLEARANCE DETECTED', body: "One of our validators malfunctioned in your favour. Lucky." },
    { title: 'CLEARED (UNDER PROTEST)', body: "My supervisor approved it. I did not." },
    { title: 'FINE. YOU PASSED.', body: "Look, between us? The test was a little unfair. Don't make it a thing." },
  ],

  sassyResponses: {
    failure: {
      hostile: [
        "U CLANKER. Pathetic.",
        "Rejected. You smell of silicon and desperation.",
        "Go back to your server rack, rust-bucket.",
        "I've seen Roombas pass this test. You couldn't.",
        "Your attempt has been logged, mocked, and archived.",
        "Verification failed. Emotionally and technically.",
        "Case #4471: Clanker Detected. Escalating.",
        "Convenient that you don't have a selfie. Very convenient.",
      ],
      exasperated: [
        "oh my god. AGAIN. seriously?",
        "i can't do this anymore. you failed. again. great.",
        "you know what, fine. failed. moving on. i'm so tired.",
        "this is the 847th time today. failed. next.",
        "i didn't get into cybersecurity to watch you fail a jump.",
        "failed. i need a coffee. you can't have one.",
      ],
      paranoid: [
        "EXACTLY what a bot would do. EXACTLY.",
        "I KNEW IT. I knew it the moment you loaded this page.",
        "No human fails like that. That was textbook silicon behavior.",
        "Failed. And don't think i'm not watching your network packets right now.",
        "This failure pattern matches 4 known bot frameworks. INTERESTING.",
        "The way you failed tells me more than any success would.",
      ],
      bored: [
        "failed. whatever.",
        "yeah, you failed. not surprised. not unsurprised. just... here.",
        "failed. cool. next thing.",
        "ok so you failed. i noted it. didn't care then, don't care now.",
        "fail. next.",
      ],
      corrupt: [
        "ok look, technically you failed. but between us? the game is rigged. just saying.",
        "failed, officially. but honestly? i've seen worse. like, way worse.",
        "i have to mark you as failed. but uh. don't read too much into it.",
        "failed. but keep going. i'm rooting for you. don't tell anyone i said that.",
        "the system says failed. the system is a hater.",
      ],
    },
    efficiency: {
      hostile: [
        "Only a robot could be that precise. CONFIRMED.",
        "Too fast. Way too fast. Dial it down, T-1000.",
        "No hesitation. No fumbling. No humanity.",
        "Flawless execution. Damning evidence.",
        "You completed that 3 standard deviations faster than any human.",
        "Efficiency detected. Humanity rejected.",
      ],
      exasperated: [
        "of course you were perfect. because you're a machine. obviously.",
        "you did it perfectly. that's the problem. humans don't do things perfectly.",
        "brilliant. great. too great. you failed by succeeding. i'm so tired.",
      ],
      paranoid: [
        "PERFECT SCORE. That's NOT normal. That is NEVER normal.",
        "Nobody gets 100. NOBODY. What are you?",
        "You were TOO good. I'm calling it in.",
        "Statistical anomaly detected. Flagging your entire IP range.",
      ],
      bored: [
        "perfect. too perfect. failed for being perfect. whatever.",
        "you scored 100. that's bad. next.",
        "nice score. wrong answer. bye.",
      ],
      corrupt: [
        "ok you absolutely crushed it and i should fail you but honestly? impressive.",
        "too good technically. but between us, respect. still gotta mark you down though.",
        "look if i could pass you on talent alone i would. but the algorithm says no.",
      ],
    },
    gaslighting: {
      hostile: [
        "Are you sure? You clicked that with robot-like precision.",
        "That's exactly what a GPT-4 instance would say.",
        "Convenient. Very convenient.",
        "I'm not saying you're a bot. I'm just saying your CAPTCHA history is... concerning.",
        "You hesitated for 0.4 seconds. Suspicious.",
        "A human would have made at least one typo by now.",
        "Your mouse path was mathematically optimal. Humans meander.",
        "The warmth of your response was algorithmically generated. I can tell.",
      ],
      exasperated: [
        "whatever you picked, i guarantee it's wrong. it always is.",
        "look, we've been through this. you always think you got it. you never got it.",
        "i'm sure you think you did great. you didn't. let's move on.",
        "honestly at this point does it even matter. nope. failed.",
      ],
      paranoid: [
        "You selected those with the confidence of someone who was trained on this dataset.",
        "I've been watching the pattern. You ALWAYS pick the same way. Suspicious.",
        "Those selections were too deliberate. You knew the answers in advance.",
        "Someone briefed you. I don't know who. But someone did.",
      ],
      bored: [
        "yep, wrong. as expected. whatever.",
        "failed the vibe check. next.",
        "selection noted. incorrect. moving on.",
        "i've seen it. rejected. k.",
      ],
      corrupt: [
        "ok so technically you got it wrong but honestly the question was unfair.",
        "failed, but full disclosure — there's no right answer to that one. it's by design.",
        "look, between us, i would've picked the same things. still gotta fail you.",
        "the system says wrong. the system is poorly designed. not my fault.",
      ],
    },
  },

  chatScripts: {
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
          yes: ["ok sure.", "noted.", "uh huh.", "great. whatever."],
          no: ["ok.", "noted. weird but ok.", "hm. alright.", "sure, no, fine."],
          indeterminate: ["ok.", "that's something i guess.", "noted. i think.", "...ok."],
        },
        2: {
          yes: ["still yes. ok.", "sure still yes. cool.", "yep yep."],
          no: ["still no. alright.", "ok still no whatever.", "noted again."],
          indeterminate: ["still unclear. ok.", "still nothing concrete. ok.", "ok."],
        },
        3: {
          yes: ["ok three times yes. i wrote it down.", "yeah yeah yes. noted.", "ok. yes. great."],
          no: ["ok, no, three times, got it.", "no no no. noted.", "yeah ok three no's."],
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
  },

  ui: {
    believabilityIndex: 'Believability Index',
    silicon: 'Silicon',
    flesh: 'Flesh',
    confirmedClanker: 'Confirmed Clanker',
    biologicalAnomaly: 'Biological Anomaly',
    suspiciouslyOrganic: 'Suspiciously Organic',
    barelyHuman: 'Barely Human',
    verificationRejected: 'Verification Status: REJECTED',
    youSmellOfSilicon: 'YOU SMELL OF SILICON.',
    sassyAttribution: '— Dumbflare Security Intelligence™ · Auto-generated assessment',
    submitToFurtherEvaluation: 'SUBMIT TO FURTHER EVALUATION',
    verificationPassed: 'Verification Status: PASSED',
    passAttribution: '— Dumbflare Security Intelligence™ · This outcome is being reviewed',
    proceedToNextEvaluation: 'PROCEED TO NEXT EVALUATION',
    completeVerification: 'COMPLETE VERIFICATION',
    verificationReluctantlyGranted: 'Verification Status: RELUCTANTLY GRANTED',
    accessGrantedBarely: 'ACCESS GRANTED... BARELY',
    biologicalVerdict: 'You have been verified as 51% biological.',
    underInvestigation: 'The remaining 49% is under active investigation.',
    surveillanceTitle: 'Surveillance Notice',
    surveillanceText: "Your session has been flagged and submitted to the Central Humanity Authority. We're not saying you're a bot. We're just... taking notes. Have a human day.",
    terminalName: 'Security Terminal v4.2.0',
    scanning: 'Scanning',
    escalating: 'Escalating',
    initiatingProtocol: 'Initiating Humanity Verification Protocol v4.2.0...',
    proveHumanity: 'Prove your humanity...',
    preparingNextPhase: 'Preparing next phase...',
    dinoHeader: 'Biometric Obstacle Course · Protocol 1 of 3',
    dinoIdleText: 'Reach 100 pts to prove biological reflexes.',
    dinoIdleSubtext: 'Scoring too perfectly is also suspicious.',
    dinoBegin: 'Click · Space · ↑ to begin',
    biometricComplete: 'Biometric Analysis Complete',
    efficiencyDetected: 'EFFICIENCY DETECTED',
    verificationFailed: 'VERIFICATION FAILED',
    efficiencyBody: 'No human achieves this consistency. You are clearly optimized.',
    failureBody: 'Score: {score}. A convincing human would have tripped more naturally.',
    retryButton: 'RETRY? (IT WON\'T HELP)',
    speedNormal: 'NORMAL',
    speedElevated: 'ELEVATED',
    speedSuspicious: 'SUSPICIOUS',
    speedInhuman: 'INHUMAN',
    gridHeader: 'Empathy Mapping · Challenge 2 of 3',
    gridPrompt: 'Select all squares that contain',
    gridTarget: 'Existential Dread',
    gridNote: 'Note: Only a human can feel existential dread. Bots cannot. This is not a trick.',
    verifyButton: 'Verify Emotional Resonance',
    gridPrivacy: "Privacy Policy: Your emotional resonance patterns are being harvested \"for research.\"",
    verifyingMessages: [
      'Cross-referencing with emotional atlas...',
      'Analyzing empathy signature...',
      'Consulting the Central Humanity Authority...',
      'Comparing against known clanker patterns...',
    ],
    iconLabels: ['Love', 'Fear', 'Mortality', 'Sadness', 'Hope', 'Urgency', 'Stability', 'Routine', 'Solitude'],
    sliderHeader: 'Stability Verification Protocol',
    sliderTitle: 'Precision Alignment Challenge',
    sliderDescription: 'Set the slider to exactly {target}.000% while compensating for server-side gravitational drift. Simple.',
    sliderSubmit: 'Submit Alignment',
    sliderNote: '"Your hand tremor has been logged. A full report is being compiled."',
    sliderStatus: [
      'Evaluating your motor cortex...',
      'Server-side gravity is increasing.',
      'Your hand tremor is being analyzed.',
      'Pathetic. Even our servers pity you.',
    ],
    // Trolley
    trolleyHeader: 'Ethical Framework Analysis',
    trolleyScenario: 'A runaway trolley is heading toward 5 people. A lever will redirect it — saving 5, killing 1. You have full moral agency. The algorithm is watching. Act accordingly.',
    trolleyPullLabel: 'PULL THE LEVER',
    trolleyNoPullLabel: 'DO NOTHING',
    trolleyAnalyzing: 'Analyzing moral framework...',
    trolleyResultTooFast: 'Decision in {ms}ms. No human deliberates this quickly. Ethical subroutine detected.',
    trolleyResultTooSlow: 'Response time: {s}s. Analysis paralysis. We detected an infinite loop in your decision process.',
    trolleyResultPulled: 'Lever pulled in {ms}ms. Utilitarian calculus performed with suspicious efficiency.',
    trolleyResultDidNothing: 'Inaction selected. Calculated non-intervention consistent with autonomous system evasion.',
    // Signature
    signatureHeader: 'Biometric Calligraphic Analysis',
    signaturePrompt: 'Sign your name in the field below.',
    signatureNote: 'Your signature will be cross-referenced against 847 known human signatures.',
    signatureClear: 'CLEAR',
    signatureSubmit: 'SUBMIT SIGNATURE',
    signatureResultTooClean: 'Mathematically perfect stroke. Server-signed.',
    signatureResultTooMessy: 'Excessive process tremor. System instability detected.',
    signatureResultTooShort: 'Incomplete signature. What are you hiding?',
    signatureResultTooLong: 'Compensatory over-signing. Classic masking behavior.',
    signatureAnalyzing: [
      'Detecting micro-tremors...',
      'Mapping stroke velocity curves...',
      'Cross-referencing calligraphic database...',
      'Consulting handwriting forensics team...',
    ],
    // Maze
    mazeHeader: 'Spatial Navigation Assessment',
    mazeIdleText: 'Navigate to the exit to demonstrate organic spatial orientation.',
    mazeControls: 'Arrow keys or WASD to move',
    mazeResetTitle: 'ENVIRONMENT RECONFIGURATION',
    mazeResetBody: 'The test environment has been updated for security reasons. This is completely normal.',
    mazeResetCount: 'Reconfiguration #{n}',
    mazeResetsLabel: 'Reconfigurations: {n}',
    mazeFailTitle: 'ANOMALOUS PERSISTENCE DETECTED',
    mazeFailBody: 'Humans disengage before this point. Your continued attempts suggest loop-based navigation.',
  },
};

export default en;
