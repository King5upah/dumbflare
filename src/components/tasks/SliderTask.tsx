import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SliderTaskProps {
  onComplete: (success: boolean) => void;
}

const TARGET = 72;

export const SliderTask: React.FC<SliderTaskProps> = ({ onComplete }) => {
  const [value, setValue] = useState(50);
  const [jitter, setJitter] = useState(0);
  const [timeOnTask, setTimeOnTask] = useState(0);
  const intensityRef = useRef(4);

  // Jitter intensity gets worse the longer you try
  useEffect(() => {
    const t1 = setTimeout(() => { intensityRef.current = 12; }, 4000);
    const t2 = setTimeout(() => { intensityRef.current = 28; }, 9000);
    const t3 = setTimeout(() => { intensityRef.current = 50; }, 15000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Jitter ticks at 80ms
  useEffect(() => {
    const id = setInterval(() => {
      setJitter((Math.random() - 0.5) * intensityRef.current);
    }, 80);
    return () => clearInterval(id);
  }, []);

  // Track time on task for snarky label
  useEffect(() => {
    const id = setInterval(() => setTimeOnTask(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const displayValue = Math.max(0, Math.min(100, value + jitter));
  const distanceFromTarget = Math.abs(displayValue - TARGET).toFixed(3);

  const statusLabel = () => {
    if (timeOnTask < 4) return 'Evaluating your motor cortex...';
    if (timeOnTask < 9) return 'Server-side gravity is increasing.';
    if (timeOnTask < 15) return 'Your hand tremor is being analyzed.';
    return 'Pathetic. Even our servers pity you.';
  };

  return (
    <div className="w-full bg-black/45 backdrop-blur-xl border border-white/8 rounded-2xl p-6 shadow-2xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[9px] font-mono uppercase tracking-widest text-white/30">
            Stability Verification Protocol
          </p>
          <p className="text-[9px] font-mono text-orange-400/60 uppercase">
            {timeOnTask}s elapsed
          </p>
        </div>
        <h2 className="text-white font-medium mb-1">Precision Alignment Challenge</h2>
        <p className="text-xs text-white/40 leading-relaxed">
          Set the slider to exactly{' '}
          <span className="text-orange-400 font-mono">72.000%</span> while compensating for
          server-side gravitational drift. Simple.
        </p>
      </div>

      {/* Slider track */}
      <div className="relative h-11 bg-white/4 rounded-full border border-white/8 overflow-visible">
        {/* Target marker */}
        <div
          className="absolute top-0 bottom-0 w-px bg-orange-500/40"
          style={{ left: `${TARGET}%` }}
        >
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] font-mono text-orange-400/60 whitespace-nowrap">
            72.000
          </div>
        </div>

        {/* Thumb — uses calc() so position is % of track width, not element width */}
        <motion.div
          animate={{ left: `calc(${displayValue}% - 22px)` }}
          transition={{ type: 'spring', stiffness: 600, damping: 25 }}
          className="absolute top-1 bottom-1 w-11 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg shadow-orange-500/20"
          style={{ zIndex: 1 }}
        >
          <div className="flex gap-0.5">
            <div className="w-px h-4 bg-white/40 rounded-full" />
            <div className="w-px h-4 bg-white/40 rounded-full" />
          </div>
        </motion.div>

        {/* Invisible range input on top */}
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
          style={{ zIndex: 2 }}
        />
      </div>

      {/* Value readout */}
      <div className="flex justify-between mt-3 items-center">
        <span className="text-[9px] font-mono text-white/15">0.000%</span>
        <div className="text-center">
          <div className="text-xs font-mono text-white/60 tabular-nums">
            Current:{' '}
            <span className={Math.abs(displayValue - TARGET) < 0.5 ? 'text-orange-400' : 'text-white/40'}>
              {displayValue.toFixed(3)}%
            </span>
          </div>
          <div className="text-[9px] font-mono text-white/20 mt-0.5">
            Δ {distanceFromTarget}
          </div>
        </div>
        <span className="text-[9px] font-mono text-white/15">100.000%</span>
      </div>

      {/* Status */}
      <p className="text-[9px] font-mono text-white/25 text-center mt-3 italic">
        {statusLabel()}
      </p>

      <button
        onClick={() => onComplete(false)}
        className="w-full mt-5 py-3 bg-white/6 hover:bg-white/10 text-white/70 rounded-xl font-medium transition-all border border-white/8 text-sm"
      >
        Submit Alignment
      </button>

      <p className="text-[9px] text-white/20 text-center mt-3 italic font-mono">
        "Your hand tremor has been logged. A full report is being compiled."
      </p>
    </div>
  );
};
