# ☁️🧠 Dumbflare™

**Continuous Friction as a Service (CFaaS)**

> *"We're not saying you're a bot, but we've seen better humans."*

A parody React CAPTCHA component that assumes everyone is a bot ("clanker") and uses increasingly absurd, high-fidelity challenges to "verify empathy" — while gaslighting the user at every step. Styled like a $49,999/month enterprise SaaS tool.

[![npm version](https://img.shields.io/npm/v/stupid-captcha.svg?style=flat-square)](https://www.npmjs.com/package/stupid-captcha)
[![license](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](LICENSE)
[![built with spite](https://img.shields.io/badge/built%20with-spite-ff6b2b.svg?style=flat-square)](#)

---

## What is this?

Standard CAPTCHAs try to prove you're human as fast as possible.

**Dumbflare does the opposite.**

It uses a multi-phase gauntlet of impossible, weaponized challenges — a suspicious chatbot interrogation, a dino runner that fails you for being too good, an "empathy mapping" grid with no correct answer, and a jitter slider that fights back harder the longer you try. The design is flawless on purpose: the joke only lands when it looks like it costs $50k/month.

---

## Features

- **5-Personality Interrogation Bot** — randomly assigned per session: hostile, exasperated, paranoid, bored, or corrupt (the corrupt one might actually let you through)
- **Intent-aware chat** — classifies your responses as `yes`, `no`, or `indeterminate` and reacts accordingly in English and Spanish
- **Canvas-based Dino Runner** — real physics, no React re-renders in the game loop, speed scales with score
- **Existential Grid** — select all squares containing "Existential Dread" (spoiler: there's no right answer)
- **Gravity-defying Slider** — target: exactly 72.000%. Jitter intensity increases over time
- **Believability Index** — a progress bar that paradoxically goes up when you *fail*, because failing is the most human thing you can do
- **Pass chance system** — each challenge has a small random chance of actually letting you through, with appropriately snarky acknowledgement
- **SassyEngine™** — 100+ responses across 5 moods × 3 categories. No two sessions are the same.

---

## Installation

```bash
npm install stupid-captcha
```

Peer dependencies (not bundled):

```bash
npm install react react-dom framer-motion
```

---

## Usage

```tsx
import { StupidCaptcha } from 'stupid-captcha';
import 'stupid-captcha/style.css';

export default function MyPage() {
  return (
    <div>
      <h1>Please verify you are human</h1>
      <StupidCaptcha onVerified={() => console.log('somehow passed')} />
    </div>
  );
}
```

---

## Props

### `<StupidCaptcha />`

| Prop | Type | Default | Description |
|---|---|---|---|
| `onVerified` | `() => void` | `undefined` | Called when the user finally clears all three challenges (by failing enough times, or by getting lucky on the pass-chance rolls). |

---

## How it works

```
Phase 1 — Interrogation
  └─ Bot randomly picks a personality (hostile / exasperated / paranoid / bored / corrupt)
  └─ 3-turn conversation, bot classifies each reply as yes / no / indeterminate
  └─ Ends with "i smell silicon. initiating advanced verification protocols."

Phase 2 — Biometric Obstacle Course (Dino Runner)
  └─ Canvas-based game, ~20% chance to pass
  └─ Fail reason: too slow = "biological frailty", too fast = "efficiency detected"

Phase 3 — Empathy Mapping (Grid)
  └─ Find "Existential Dread" in a 3×3 icon grid
  └─ Fake async verification with rotating status messages
  └─ ~30% chance to pass, always gaslights you regardless

Phase 4 — Stability Verification (Slider)
  └─ Align to exactly 72.000% with escalating server-side jitter
  └─ ~15% chance to pass
  └─ "Your hand tremor has been logged."

Result — Access Granted (Barely)
  └─ "You have been verified as 51% biological."
  └─ "The remaining 49% is under active investigation."
```

---

## SassyEngine API

You can use the response engine directly:

```ts
import { getSassyResponse, pickMood } from 'stupid-captcha';

// Random mood, random response
const msg = getSassyResponse('failure');

// Pick a specific mood
const mood = pickMood(); // 'hostile' | 'exasperated' | 'paranoid' | 'bored' | 'corrupt'
const msg2 = getSassyResponse('gaslighting', mood);
```

### Categories

| Category | When used |
|---|---|
| `failure` | Dino score < 100, Slider submission |
| `efficiency` | Dino score ≥ 100 (too good = suspicious) |
| `gaslighting` | Grid task completion |

### Moods

| Mood | Personality |
|---|---|
| `hostile` | Aggressive, condescending, never gives benefit of the doubt |
| `exasperated` | Exhausted, resigned — "i'm so tired of this" |
| `paranoid` | Sees bots everywhere, full conspiracy energy |
| `bored` | Deadpan, doesn't care, still fails you |
| `corrupt` | Secretly on your side, fails you anyway — "the system is a hater" |

---

## Believability Index

The meter at the top fills when you fail challenges (not when you pass them).

| Score | Label | Meaning |
|---|---|---|
| 0–33% | Confirmed Clanker | Starting state |
| 34–66% | Biological Anomaly | You've failed once |
| 67–99% | Suspiciously Organic | Getting there |
| 100% | Barely Human | Peak achievable humanity |

---

## Tech stack

- **React 18** + **TypeScript**
- **Framer Motion** — UI transitions and overlays
- **Lucide React** — icons
- **HTML Canvas API** — dino runner (bypasses React's render cycle for real 60fps gameplay)
- **Vite** — build tooling (library mode)

---

## Development

```bash
git clone https://github.com/King5upah/dumbflare.git
cd dumbflare
npm install
npm run dev        # http://localhost:5173
npm run build      # builds to dist/
```

---

## Publishing to npm

```bash
npm run build
npm publish
```

> Package name on npm: `stupid-captcha`
> Main export: `StupidCaptcha` component + `getSassyResponse` + `pickMood`

---

## License

MIT — do whatever you want, just don't claim you built it without suffering.

---

*© 2026 Dumbflare Systems Inc. · Not responsible for existential crises.*
*Built with spite and Framer Motion.*
