import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '../../lib/LocaleContext';
import type { TaskReason } from '../../lib/i18n/types';

interface TrolleyTaskProps {
  onComplete: (reason: TaskReason) => void;
}

type Phase = 'waiting' | 'analyzing' | 'verdict';

export const TrolleyTask: React.FC<TrolleyTaskProps> = ({ onComplete }) => {
  const { data } = useLocale();
  const { ui } = data;

  const [phase, setPhase] = useState<Phase>('waiting');
  const [verdict, setVerdict] = useState('');
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef<number>(Date.now());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tooSlowRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    startRef.current = Date.now();
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startRef.current) / 1000));
    }, 1000);

    tooSlowRef.current = setTimeout(() => {
      decide(null);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (tooSlowRef.current) clearTimeout(tooSlowRef.current);
    };
  }, []);

  const decide = (pulled: boolean | null) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (tooSlowRef.current) clearTimeout(tooSlowRef.current);

    const ms = Date.now() - startRef.current;
    let msg: string;

    if (pulled === null) {
      const s = Math.round(ms / 1000);
      msg = ui.trolleyResultTooSlow.replace('{s}', String(s));
    } else if (ms < 800) {
      msg = ui.trolleyResultTooFast.replace('{ms}', String(ms));
    } else if (pulled) {
      msg = ui.trolleyResultPulled.replace('{ms}', String(ms));
    } else {
      msg = ui.trolleyResultDidNothing;
    }

    setVerdict(msg);
    setPhase('analyzing');

    setTimeout(() => {
      setPhase('verdict');
      setTimeout(() => onComplete('gaslighting'), 2200);
    }, 1800);
  };

  return (
    <div className="w-full bg-black/45 backdrop-blur-xl border border-white/8 rounded-2xl overflow-hidden shadow-2xl">
      <div className="px-5 py-3 border-b border-white/8 bg-white/3 flex items-center justify-between">
        <span className="text-xs font-mono text-white/60 tracking-wide">{ui.trolleyHeader}</span>
        {phase === 'waiting' && (
          <span className="text-[9px] font-mono text-orange-400/60 uppercase tracking-widest">
            {elapsed}s elapsed
          </span>
        )}
      </div>

      <div className="p-6 space-y-6">
        <AnimatePresence mode="wait">

          {phase === 'waiting' && (
            <motion.div key="waiting"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Trolley illustration */}
              <div className="relative h-20 bg-white/3 rounded-xl border border-white/8 overflow-hidden">
                <div className="absolute inset-0 flex items-center px-4">
                  {/* Track */}
                  <div className="w-full h-px bg-white/20 relative">
                    {/* Fork */}
                    <div className="absolute right-1/3 -top-6 w-px h-6 bg-white/20" />
                    {/* People group of 5 */}
                    <div className="absolute right-4 top-1 flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1.5 h-4 bg-red-400/70 rounded-sm" />
                      ))}
                    </div>
                    {/* Person on branch */}
                    <div className="absolute right-1/3 -top-8">
                      <div className="w-1.5 h-4 bg-orange-400/70 rounded-sm" />
                    </div>
                    {/* Trolley */}
                    <motion.div
                      className="absolute left-2 -top-3 w-8 h-6 bg-orange-600/80 rounded border border-orange-400/40 flex items-center justify-center"
                      animate={{ x: [0, 8, 0] }}
                      transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                    >
                      <span className="text-[8px] text-white font-mono">🚃</span>
                    </motion.div>
                  </div>
                </div>
              </div>

              <p className="text-white/75 text-sm leading-relaxed text-center">
                {ui.trolleyScenario}
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => decide(true)}
                  className="py-4 bg-red-700/60 hover:bg-red-600/80 border border-red-500/30 text-white rounded-xl font-mono text-xs uppercase tracking-wider transition-all"
                >
                  {ui.trolleyPullLabel}
                </button>
                <button
                  onClick={() => decide(false)}
                  className="py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 rounded-xl font-mono text-xs uppercase tracking-wider transition-all"
                >
                  {ui.trolleyNoPullLabel}
                </button>
              </div>
            </motion.div>
          )}

          {phase === 'analyzing' && (
            <motion.div key="analyzing"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="py-8 text-center space-y-3"
            >
              <div className="flex justify-center gap-1.5">
                {[0, 1, 2].map(i => (
                  <span key={i} className="w-1.5 h-1.5 bg-orange-400/60 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 160}ms` }} />
                ))}
              </div>
              <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
                {ui.trolleyAnalyzing}
              </p>
            </motion.div>
          )}

          {phase === 'verdict' && (
            <motion.div key="verdict"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              className="py-4 space-y-3"
            >
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                <p className="text-red-200/80 text-sm leading-relaxed italic">"{verdict}"</p>
                <p className="text-red-500/35 text-[9px] font-mono mt-3 uppercase tracking-wider">
                  — Ethical Framework Analyzer™
                </p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};
