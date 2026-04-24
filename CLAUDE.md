# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # dev server at http://localhost:5173 (demo app)
npm run build        # compile library → dist/ (for npm publish)
npm run build:demo   # compile demo app → demo-dist/ (for GitHub Pages)
npm run preview      # preview the library build locally
```

There are no tests or linting scripts.

## Architecture

This is a **React component library** published as `stupid-captcha` on npm. It exports one component (`StupidCaptcha`) and a few engine utilities.

### Two build configs

| Config | Entry | Output | Purpose |
|---|---|---|---|
| `vite.config.ts` | `src/index.ts` | `dist/` | npm library (externalises react, react-dom) |
| `vite.demo.config.ts` | `index.html` | `demo-dist/` | GitHub Pages demo (bundles everything) |

### State ownership

`StupidCaptcha.tsx` is the sole stateful orchestrator. It owns:
- `step` — which screen/task is shown (`chat → task_dino → task_grid → task_slider → success/fail`)
- `taskIndex` — drives advancement; **must** be used instead of `failCount` to avoid stale closure bugs in callbacks
- `failCount` — feeds into the Believability Index display only
- `currentSassy` / `currentPass` — text for the fail/pass recap screens

All task components (`DinoTask`, `GridTask`, `SliderTask`) are stateless with respect to the global flow — they receive a single `onComplete` callback and the parent decides the consequence.

### SassyEngine (`src/lib/SassyEngine.ts`)

Stateless response picker. Two axes:
- **Mood** (`hostile | exasperated | paranoid | bored | corrupt`) — picked once per session with a weighted pool (hostile is most common)
- **Category** (`failure | efficiency | gaslighting`) — determined by which task triggered the response

`getSassyResponse(category, mood?)` is the main public API. `getHumanityScore` / `getHumanityLabel` drive the Believability Index display in `StupidCaptcha`.

### ChatInterface (`src/components/ChatInterface.tsx`)

Picks a personality (mood) once per mount via `useRef`, then runs a fixed 3-turn script from `SCRIPTS[mood]`. Each user reply is classified as `yes | no | indeterminate` by `classifyIntent()` (regex-based, includes English and Spanish keywords). The bot replies from `script.step[turn][intent]` and calls `onSequenceComplete` after the final message.

### DinoTask (`src/components/tasks/DinoTask.tsx`)

Canvas-only game loop using a single `useRef` object (`gs`) for all mutable physics state — avoids stale RAF closures. React state (`phase`, `score`) is only updated at coarse events (cactus pass, game over) to drive the overlay UI. Speed scales with score. Reaching 100 pts triggers `efficiency` (too good), a collision triggers `failure`.

### Tone / copy rules

All microcopy follows the voice in `Dumbflare_Design_Brief.md`: cold, corporate, deeply suspicious. Never "Error: try again." Always something that sounds like it cost $50k/month.
