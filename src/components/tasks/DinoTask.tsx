import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '../../lib/LocaleContext';

interface DinoTaskProps {
  onComplete: (score: number) => void;
}

const W          = 480;
const H          = 160;
const GROUND_Y   = H - 32;
const DINO_X     = 48;
const DINO_SIZE  = 24;
const CACTUS_W   = 14;
const CACTUS_H   = 30;
const JUMP_VEL   = 11;
const GRAVITY    = 0.65;

type Phase = 'idle' | 'running' | 'over';

interface GameState {
  cactusX : number;
  dinoAir : number;
  jumpVel : number;
  jumping : boolean;
  score   : number;
}

const freshState = (): GameState => ({
  cactusX : W + 80,
  dinoAir : 0,
  jumpVel : 0,
  jumping : false,
  score   : 0,
});

export const DinoTask: React.FC<DinoTaskProps> = ({ onComplete }) => {
  const { data } = useLocale();
  const { ui } = data;

  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const phaseRef   = useRef<Phase>('idle');
  const gs         = useRef<GameState>(freshState());
  const onDoneRef  = useRef(onComplete);
  useEffect(() => { onDoneRef.current = onComplete; });

  const [phase,      setPhase]      = useState<Phase>('idle');
  const [score,      setScore]      = useState(0);
  const [overReason, setOverReason] = useState<'efficiency' | 'failure'>('failure');

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext('2d')!;
    let raf: number;

    const draw = () => {
      raf = requestAnimationFrame(draw);
      const g = gs.current;

      ctx.fillStyle = '#09090b';
      ctx.fillRect(0, 0, W, H);

      if (phaseRef.current === 'running') {
        const speed = 2.4 + g.score * 0.025;
        g.cactusX -= speed;

        if (g.cactusX < -CACTUS_W - 10) {
          g.score  += 10;
          g.cactusX = W + 30 + Math.random() * 130;
          setScore(g.score);
        }

        if (g.jumping) {
          g.dinoAir += g.jumpVel;
          g.jumpVel -= GRAVITY;
          if (g.dinoAir <= 0) { g.dinoAir = 0; g.jumpVel = 0; g.jumping = false; }
        }

        const dinoTop    = GROUND_Y - DINO_SIZE - g.dinoAir;
        const dinoBottom = GROUND_Y - g.dinoAir;
        const dinoLeft   = DINO_X;
        const dinoRight  = DINO_X + DINO_SIZE;
        const cLeft      = g.cactusX;
        const cRight     = g.cactusX + CACTUS_W;
        const cTop       = GROUND_Y - CACTUS_H;

        const hit =
          dinoRight  > cLeft + 3  &&
          dinoLeft   < cRight - 3 &&
          dinoBottom > cTop   + 3 &&
          dinoTop    < GROUND_Y;

        if (hit) {
          phaseRef.current = 'over';
          setOverReason('failure');
          setPhase('over');
          onDoneRef.current(g.score);
        } else if (g.score >= 100) {
          phaseRef.current = 'over';
          setOverReason('efficiency');
          setPhase('over');
          onDoneRef.current(100);
        }
      }

      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y);
      ctx.lineTo(W, GROUND_Y);
      ctx.stroke();

      const g2    = gs.current;
      const dinoY = GROUND_Y - DINO_SIZE - g2.dinoAir;
      ctx.fillStyle = '#f97316';
      ctx.fillRect(DINO_X, dinoY, DINO_SIZE, DINO_SIZE);
      ctx.fillStyle = '#000';
      ctx.fillRect(DINO_X + DINO_SIZE - 7, dinoY + 5, 4, 4);
      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.fillRect(DINO_X + 4, dinoY + DINO_SIZE - 5, DINO_SIZE - 8, 1);

      if (phaseRef.current !== 'idle') {
        ctx.fillStyle = '#16a34a';
        ctx.fillRect(g2.cactusX, GROUND_Y - CACTUS_H, CACTUS_W, CACTUS_H);
        ctx.fillRect(g2.cactusX - 5, GROUND_Y - CACTUS_H + 8, 5, 10);
        ctx.fillRect(g2.cactusX - 5, GROUND_Y - CACTUS_H + 8, 10, 4);
        ctx.fillRect(g2.cactusX + CACTUS_W, GROUND_Y - CACTUS_H + 13, 5, 8);
        ctx.fillRect(g2.cactusX + CACTUS_W - 5, GROUND_Y - CACTUS_H + 13, 10, 4);
      }
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  const startGame = () => {
    gs.current       = freshState();
    phaseRef.current = 'running';
    setScore(0);
    setPhase('running');
  };

  const doJump = () => {
    const g = gs.current;
    if (phaseRef.current !== 'running' || g.jumping) return;
    g.jumping = true;
    g.jumpVel = JUMP_VEL;
  };

  const handleClick = () => {
    if (phase === 'idle')        startGame();
    else if (phase === 'running') doJump();
  };

  const retry = (e: React.MouseEvent) => {
    e.stopPropagation();
    gs.current       = freshState();
    phaseRef.current = 'idle';
    setScore(0);
    setPhase('idle');
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code !== 'Space' && e.code !== 'ArrowUp') return;
      e.preventDefault();
      if (phaseRef.current === 'idle')        startGame();
      else if (phaseRef.current === 'running') doJump();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const speedLabel =
    score < 30 ? ui.speedNormal    :
    score < 60 ? ui.speedElevated  :
    score < 90 ? ui.speedSuspicious : ui.speedInhuman;

  return (
    <div
      onClick={handleClick}
      className="w-full bg-zinc-950 border border-white/8 rounded-2xl overflow-hidden cursor-pointer select-none"
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
        <span className="text-[9px] font-mono uppercase tracking-widest text-white/20">
          {ui.dinoHeader}
        </span>
        <div className="flex items-center gap-2">
          {phase === 'running' && (
            <span className="text-[8px] font-mono uppercase text-orange-400/50">{speedLabel}</span>
          )}
          <span className="text-base font-mono text-white/40 tabular-nums">
            {score.toString().padStart(5, '0')}
          </span>
        </div>
      </div>

      <div className="relative">
        <canvas ref={canvasRef} width={W} height={H} className="w-full block" />

        <AnimatePresence>
          {phase === 'idle' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
            >
              <p className="text-white/50 text-sm mb-1">{ui.dinoIdleText}</p>
              <p className="text-white/25 text-xs mb-5">{ui.dinoIdleSubtext}</p>
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.4 }}
                className="px-4 py-2 bg-orange-500/15 border border-orange-500/25 rounded-lg"
              >
                <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                  {ui.dinoBegin}
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase === 'over' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6"
            >
              <p className="text-[9px] font-mono uppercase tracking-widest text-white/20 mb-2">
                {ui.biometricComplete}
              </p>
              <h3 className="text-lg font-bold text-white mb-1.5">
                {overReason === 'efficiency' ? ui.efficiencyDetected : ui.verificationFailed}
              </h3>
              <p className="text-white/40 text-xs mb-5 leading-relaxed max-w-[260px]">
                {overReason === 'efficiency'
                  ? ui.efficiencyBody
                  : ui.failureBody.replace('{score}', String(score))}
              </p>
              <button
                onClick={retry}
                className="px-5 py-2 bg-white/8 hover:bg-white/14 text-white/60 rounded-lg text-xs transition-colors border border-white/10"
              >
                {ui.retryButton}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
