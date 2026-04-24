import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Ghost, Skull, CloudRain, Sun, Zap, Anchor, Coffee, Moon } from 'lucide-react';
import { useLocale } from '../../lib/LocaleContext';

interface GridTaskProps {
  onComplete: (success: boolean) => void;
}

const ICON_COMPONENTS = [Heart, Ghost, Skull, CloudRain, Sun, Zap, Anchor, Coffee, Moon];

export const GridTask: React.FC<GridTaskProps> = ({ onComplete }) => {
  const { data } = useLocale();
  const { ui } = data;

  const [selected, setSelected] = useState<number[]>([]);
  const [verifying, setVerifying] = useState(false);
  const [verifyMsgIdx, setVerifyMsgIdx] = useState(0);

  const toggle = (i: number) => {
    if (verifying) return;
    setSelected(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const handleVerify = async () => {
    if (selected.length === 0 || verifying) return;
    setVerifying(true);

    for (let i = 0; i < ui.verifyingMessages.length; i++) {
      setVerifyMsgIdx(i);
      await new Promise(r => setTimeout(r, 600));
    }

    await new Promise(r => setTimeout(r, 400));
    onComplete(true);
  };

  return (
    <div className="w-full bg-black/45 backdrop-blur-xl border border-white/8 rounded-2xl p-6 shadow-2xl">
      <div className="bg-orange-500/10 border border-orange-500/15 rounded-xl p-4 mb-5">
        <p className="text-[9px] text-white/30 uppercase tracking-widest font-mono mb-1.5">
          {ui.gridHeader}
        </p>
        <h2 className="text-white font-medium text-sm leading-snug">
          {ui.gridPrompt}{' '}
          <span className="text-orange-400 font-bold">"{ui.gridTarget}"</span>
        </h2>
        <p className="text-[10px] text-white/30 mt-2 italic">{ui.gridNote}</p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {ICON_COMPONENTS.map((IconComp, i) => (
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
            <IconComp
              size={22}
              className={selected.includes(i) ? 'text-orange-400' : 'text-white/20'}
            />
            <span className={`text-[8px] font-mono uppercase tracking-wide ${
              selected.includes(i) ? 'text-orange-400/70' : 'text-white/15'
            }`}>
              {ui.iconLabels[i]}
            </span>
          </motion.button>
        ))}
      </div>

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
              <span className="text-xs font-mono ml-1">{ui.verifyingMessages[verifyMsgIdx]}</span>
            </motion.span>
          ) : (
            <motion.span key="verify" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {ui.verifyButton}
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <p className="text-[9px] text-white/20 text-center mt-3 font-mono italic">
        {ui.gridPrivacy}
      </p>
    </div>
  );
};
