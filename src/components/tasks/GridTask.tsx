import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Ghost, Skull, CloudRain, Sun, Zap, Anchor, Coffee, Moon } from 'lucide-react';

interface GridTaskProps {
  onComplete: (success: boolean) => void;
}

const ICONS = [
  { icon: Heart, label: 'Love' },
  { icon: Ghost, label: 'Fear' },
  { icon: Skull, label: 'Mortality' },
  { icon: CloudRain, label: 'Sadness' },
  { icon: Sun, label: 'Hope' },
  { icon: Zap, label: 'Urgency' },
  { icon: Anchor, label: 'Stability' },
  { icon: Coffee, label: 'Routine' },
  { icon: Moon, label: 'Solitude' },
];

const VERIFYING_MESSAGES = [
  'Cross-referencing with emotional atlas...',
  'Analyzing empathy signature...',
  'Consulting the Central Humanity Authority...',
  'Comparing against known clanker patterns...',
];

export const GridTask: React.FC<GridTaskProps> = ({ onComplete }) => {
  const [selected, setSelected] = useState<number[]>([]);
  const [verifying, setVerifying] = useState(false);
  const [verifyMsg, setVerifyMsg] = useState(VERIFYING_MESSAGES[0]);

  const toggle = (i: number) => {
    if (verifying) return;
    setSelected(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const handleVerify = async () => {
    if (selected.length === 0 || verifying) return;
    setVerifying(true);

    // Cycle through fake verification messages
    for (let i = 0; i < VERIFYING_MESSAGES.length; i++) {
      setVerifyMsg(VERIFYING_MESSAGES[i]);
      await new Promise(r => setTimeout(r, 600));
    }

    await new Promise(r => setTimeout(r, 400));
    onComplete(true); // always fails you, handled by parent
  };

  return (
    <div className="w-full bg-black/45 backdrop-blur-xl border border-white/8 rounded-2xl p-6 shadow-2xl">
      {/* Header */}
      <div className="bg-orange-500/10 border border-orange-500/15 rounded-xl p-4 mb-5">
        <p className="text-[9px] text-white/30 uppercase tracking-widest font-mono mb-1.5">
          Empathy Mapping · Challenge 2 of 3
        </p>
        <h2 className="text-white font-medium text-sm leading-snug">
          Select all squares that contain{' '}
          <span className="text-orange-400 font-bold">"Existential Dread"</span>
        </h2>
        <p className="text-[10px] text-white/30 mt-2 italic">
          Note: Only a human can feel existential dread. Bots cannot. This is not a trick.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-2">
        {ICONS.map((item, i) => (
          <motion.button
            key={i}
            whileHover={!verifying ? { scale: 1.03 } : {}}
            whileTap={!verifying ? { scale: 0.94 } : {}}
            onClick={() => toggle(i)}
            disabled={verifying}
            className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer disabled:cursor-not-allowed ${
              selected.includes(i)
                ? 'border-orange-500 bg-orange-500/15'
                : 'border-white/5 bg-white/3 hover:border-white/12'
            }`}
          >
            <item.icon
              size={22}
              className={selected.includes(i) ? 'text-orange-400' : 'text-white/20'}
            />
            <span className={`text-[8px] font-mono uppercase tracking-wide ${
              selected.includes(i) ? 'text-orange-400/70' : 'text-white/15'
            }`}>
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Verify button */}
      <button
        onClick={handleVerify}
        disabled={selected.length === 0 || verifying}
        className="w-full mt-5 py-3 bg-orange-600/80 hover:bg-orange-500 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all border border-orange-500/30 text-sm relative overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {verifying ? (
            <motion.span
              key="verifying"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-2"
            >
              <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '160ms' }} />
              <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '320ms' }} />
              <span className="text-xs font-mono ml-1">{verifyMsg}</span>
            </motion.span>
          ) : (
            <motion.span key="verify" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Verify Emotional Resonance
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <p className="text-[9px] text-white/20 text-center mt-3 font-mono italic">
        Privacy Policy: Your emotional resonance patterns are being harvested "for research."
      </p>
    </div>
  );
};
