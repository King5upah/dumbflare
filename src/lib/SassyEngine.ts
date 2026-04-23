export type Mood = 'hostile' | 'exasperated' | 'paranoid' | 'bored' | 'corrupt';
export type Category = 'failure' | 'efficiency' | 'gaslighting';

const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Weighted mood pool — corrupt & bored are rarer, hostile is most common
const MOOD_POOL: Mood[] = [
  'hostile', 'hostile', 'hostile',
  'exasperated', 'exasperated',
  'paranoid', 'paranoid',
  'bored',
  'corrupt',
];

export const pickMood = (): Mood => pick(MOOD_POOL);

const responses: Record<Category, Record<Mood, string[]>> = {
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
};

// ─── Public API ────────────────────────────────────────────────────────────────

export const getSassyResponse = (category: Category, mood?: Mood): string => {
  const m = mood ?? pickMood();
  return pick(responses[category][m]);
};

export const getHumanityScore = (failCount: number): number =>
  Math.min(failCount * 34, 100);

export const getHumanityLabel = (score: number): { label: string; color: string } => {
  if (score >= 100) return { label: 'Barely Human', color: 'text-emerald-400' };
  if (score >= 67) return { label: 'Suspiciously Organic', color: 'text-yellow-400' };
  if (score >= 34) return { label: 'Biological Anomaly', color: 'text-orange-400' };
  return { label: 'Confirmed Clanker', color: 'text-red-400' };
};
