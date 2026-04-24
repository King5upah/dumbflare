import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '../../lib/LocaleContext';
import type { TaskReason } from '../../lib/i18n/types';

interface MazeTaskProps {
  onComplete: (reason: TaskReason) => void;
}

const COLS = 15;
const ROWS = 9;
const CELL = 30;
const W = COLS * CELL;
const H = ROWS * CELL;
const MAX_RESETS = 3;

interface Cell {
  walls: [boolean, boolean, boolean, boolean]; // N E S W
  visited: boolean;
}

const generateMaze = (): Cell[][] => {
  const grid: Cell[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({ walls: [true, true, true, true], visited: false }))
  );

  const idx = (r: number, c: number) => r >= 0 && r < ROWS && c >= 0 && c < COLS;
  const neighbors = (r: number, c: number): [number, number, number][] => {
    const dirs: [number, number, number][] = [[-1, 0, 0], [0, 1, 1], [1, 0, 2], [0, -1, 3]];
    return dirs.filter(([dr, dc]) => idx(r + dr, c + dc) && !grid[r + dr][c + dc].visited)
               .map(([dr, dc, d]) => [r + dr, c + dc, d]) as [number, number, number][];
  };

  const stack: [number, number][] = [];
  grid[0][0].visited = true;
  stack.push([0, 0]);

  while (stack.length) {
    const [r, c] = stack[stack.length - 1];
    const ns = neighbors(r, c);
    if (!ns.length) { stack.pop(); continue; }
    const [nr, nc, dir] = ns[Math.floor(Math.random() * ns.length)];
    // Remove wall between current and neighbor
    grid[r][c].walls[dir] = false;
    const opposite = [2, 3, 0, 1][dir];
    grid[nr][nc].walls[opposite] = false;
    grid[nr][nc].visited = true;
    stack.push([nr, nc]);
  }

  return grid;
};

type OverlayType = 'reset' | 'fail' | null;

export const MazeTask: React.FC<MazeTaskProps> = ({ onComplete }) => {
  const { data } = useLocale();
  const { ui } = data;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<Cell[][]>(generateMaze());
  const playerRef = useRef<[number, number]>([0, 0]);
  const resetsRef = useRef(0);
  const triggeredRef = useRef(false);

  const [phase, setPhase] = useState<'idle' | 'playing' | 'done'>('idle');
  const [overlay, setOverlay] = useState<OverlayType>(null);
  const [resets, setResets] = useState(0);

  const EXIT: [number, number] = [ROWS - 1, COLS - 1];

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.fillRect(0, 0, W, H);

    const grid = gridRef.current;
    const [pr, pc] = playerRef.current;

    // Draw cells and walls
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = c * CELL;
        const y = r * CELL;
        const cell = grid[r][c];

        ctx.strokeStyle = 'rgba(255,255,255,0.18)';
        ctx.lineWidth = 1.5;

        if (cell.walls[0]) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + CELL, y); ctx.stroke(); }
        if (cell.walls[1]) { ctx.beginPath(); ctx.moveTo(x + CELL, y); ctx.lineTo(x + CELL, y + CELL); ctx.stroke(); }
        if (cell.walls[2]) { ctx.beginPath(); ctx.moveTo(x, y + CELL); ctx.lineTo(x + CELL, y + CELL); ctx.stroke(); }
        if (cell.walls[3]) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + CELL); ctx.stroke(); }
      }
    }

    // Exit marker
    const [er, ec] = EXIT;
    ctx.fillStyle = 'rgba(52,211,153,0.25)';
    ctx.fillRect(ec * CELL + 2, er * CELL + 2, CELL - 4, CELL - 4);
    ctx.fillStyle = 'rgba(52,211,153,0.8)';
    ctx.font = `${CELL * 0.5}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⬛', ec * CELL + CELL / 2, er * CELL + CELL / 2);

    // Player
    ctx.fillStyle = 'rgba(251,146,60,0.9)';
    const pad = 5;
    ctx.beginPath();
    ctx.roundRect(pc * CELL + pad, pr * CELL + pad, CELL - pad * 2, CELL - pad * 2, 4);
    ctx.fill();
  }, []);

  useEffect(() => {
    if (phase !== 'idle') draw();
  }, [phase, draw]);

  const resetMaze = useCallback(() => {
    resetsRef.current += 1;
    setResets(resetsRef.current);
    triggeredRef.current = false;

    if (resetsRef.current >= MAX_RESETS) {
      setOverlay('fail');
      setTimeout(() => {
        setPhase('done');
        onComplete('failure');
      }, 2500);
      return;
    }

    setOverlay('reset');
    setTimeout(() => {
      gridRef.current = generateMaze();
      playerRef.current = [0, 0];
      setOverlay(null);
      draw();
    }, 2500);
  }, [draw, onComplete]);

  const movePlayer = useCallback((dr: number, dc: number) => {
    if (phase !== 'playing' || overlay) return;

    const [r, c] = playerRef.current;
    const nr = r + dr;
    const nc = c + dc;
    if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) return;

    const cell = gridRef.current[r][c];
    const wallIdx = dr === -1 ? 0 : dr === 1 ? 2 : dc === 1 ? 1 : 3;
    if (cell.walls[wallIdx]) return;

    playerRef.current = [nr, nc];
    draw();

    // Check amnesia trigger: manhattan distance to exit ≤ 2
    const [er, ec] = EXIT;
    const dist = Math.abs(nr - er) + Math.abs(nc - ec);

    if (nr === er && nc === ec) {
      setPhase('done');
      onComplete('failure');
      return;
    }

    if (dist <= 2 && !triggeredRef.current) {
      triggeredRef.current = true;
      setTimeout(resetMaze, 300);
    }
  }, [phase, overlay, draw, resetMaze, onComplete]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const map: Record<string, [number, number]> = {
        ArrowUp: [-1, 0], w: [-1, 0], W: [-1, 0],
        ArrowDown: [1, 0], s: [1, 0], S: [1, 0],
        ArrowLeft: [0, -1], a: [0, -1], A: [0, -1],
        ArrowRight: [0, 1], d: [0, 1], D: [0, 1],
      };
      const dir = map[e.key];
      if (dir) {
        e.preventDefault();
        movePlayer(dir[0], dir[1]);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [movePlayer]);

  const startPlaying = () => {
    setPhase('playing');
    setTimeout(draw, 50);
  };

  return (
    <div className="w-full bg-black/45 backdrop-blur-xl border border-white/8 rounded-2xl overflow-hidden shadow-2xl">
      <div className="px-5 py-3 border-b border-white/8 bg-white/3 flex items-center justify-between">
        <span className="text-xs font-mono text-white/60 tracking-wide">{ui.mazeHeader}</span>
        {phase === 'playing' && (
          <span className="text-[9px] font-mono text-white/25 uppercase tracking-widest">
            {ui.mazeResetsLabel.replace('{n}', String(resets))}
          </span>
        )}
      </div>

      <div className="p-4 space-y-3">
        <AnimatePresence mode="wait">

          {phase === 'idle' && (
            <motion.div key="idle"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="py-8 text-center space-y-4"
            >
              <p className="text-white/60 text-sm">{ui.mazeIdleText}</p>
              <button
                onClick={startPlaying}
                className="px-6 py-3 bg-orange-600/70 hover:bg-orange-500/80 border border-orange-500/30 text-white rounded-xl font-mono text-xs uppercase tracking-wider transition-all"
              >
                BEGIN NAVIGATION
              </button>
            </motion.div>
          )}

          {(phase === 'playing' || phase === 'done') && (
            <motion.div key="playing"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="space-y-3"
            >
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  width={W}
                  height={H}
                  className="w-full rounded-xl border border-white/10"
                  style={{ imageRendering: 'pixelated' }}
                />

                {/* Overlay */}
                <AnimatePresence>
                  {overlay && (
                    <motion.div
                      key={overlay}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-xl p-4 text-center"
                    >
                      {overlay === 'reset' && (
                        <>
                          <p className="text-[9px] font-mono uppercase tracking-widest text-orange-400/60 mb-1">
                            {ui.mazeResetCount.replace('{n}', String(resetsRef.current))}
                          </p>
                          <p className="text-white font-bold text-sm mb-1">{ui.mazeResetTitle}</p>
                          <p className="text-white/50 text-xs leading-relaxed">{ui.mazeResetBody}</p>
                        </>
                      )}
                      {overlay === 'fail' && (
                        <>
                          <p className="text-red-400 font-bold text-sm mb-1">{ui.mazeFailTitle}</p>
                          <p className="text-white/50 text-xs leading-relaxed">{ui.mazeFailBody}</p>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <p className="text-white/25 text-[10px] text-center font-mono">{ui.mazeControls}</p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};
