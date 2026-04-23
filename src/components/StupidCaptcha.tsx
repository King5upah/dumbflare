import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatInterface } from './ChatInterface';
import { DinoTask } from './tasks/DinoTask';
import { GridTask } from './tasks/GridTask';
import { SliderTask } from './tasks/SliderTask';
import { getSassyResponse, getHumanityScore, getHumanityLabel, pickMood } from '../lib/SassyEngine';
import { CheckCircle2, ShieldX, Eye, BadgeCheck } from 'lucide-react';

type Step = 'chat' | 'task_dino' | 'task_grid' | 'task_slider' | 'success' | 'fail_recap' | 'pass_surprise';

const TASK_SEQUENCE: Step[] = ['task_dino', 'task_grid', 'task_slider'];

// Chance the system "accidentally" passes you on each challenge
const PASS_CHANCE = [0.20, 0.30, 0.15]; // dino, grid, slider

const PASS_LINES = [
  { title: 'VERIFICATION: PASSED', body: "We don't know how. The team is investigating." },
  { title: 'SUSPICIOUS SUCCESS', body: 'You passed. This will be reviewed.' },
  { title: 'OUTCOME: GRUDGINGLY ACCEPTED', body: "The algorithm passed you. The algorithm may be wrong." },
  { title: 'ANOMALOUS CLEARANCE DETECTED', body: "One of our validators malfunctioned in your favour. Lucky." },
  { title: 'CLEARED (UNDER PROTEST)', body: "My supervisor approved it. I did not." },
  { title: 'FINE. YOU PASSED.', body: "Look, between us? The test was a little unfair. Don't make it a thing." },
];

const meterGradient = (score: number) => {
  if (score >= 100) return 'from-emerald-600 to-emerald-400';
  if (score >= 67)  return 'from-yellow-600 to-yellow-400';
  if (score >= 34)  return 'from-orange-600 to-orange-400';
  return 'from-red-700 to-red-500';
};

export const StupidCaptcha: React.FC = () => {
  const [step, setStep]               = useState<Step>('chat');
  const [taskIndex, setTaskIndex]     = useState(0);
  const [failCount, setFailCount]     = useState(0);
  const [currentSassy, setCurrentSassy] = useState('');
  const [currentPass, setCurrentPass]   = useState(PASS_LINES[0]);

  const humanityScore = getHumanityScore(failCount);
  const labelInfo     = getHumanityLabel(humanityScore);

  // Called by every task on completion
  const handleTaskDone = (reason: 'efficiency' | 'failure' | 'gaslighting') => {
    const roll = Math.random();
    const passed = roll < PASS_CHANCE[taskIndex];

    if (passed) {
      setCurrentPass(PASS_LINES[Math.floor(Math.random() * PASS_LINES.length)]);
      setStep('pass_surprise');
    } else {
      setCurrentSassy(getSassyResponse(reason, pickMood()));
      setFailCount(f => f + 1);
      setStep('fail_recap');
    }
  };

  const advance = () => {
    const next = taskIndex + 1;
    setTaskIndex(next);
    setStep(next < TASK_SEQUENCE.length ? TASK_SEQUENCE[next] : 'success');
  };

  return (
    <div className="w-full max-w-md space-y-3">

      {/* ── Believability Meter ─────────────────────────────────────────── */}
      <AnimatePresence>
        {step !== 'chat' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="bg-black/50 backdrop-blur-xl border border-white/8 rounded-2xl px-5 py-3"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-mono uppercase tracking-widest text-white/25">
                Believability Index
              </span>
              <span className={`text-[9px] font-mono uppercase tracking-widest ${labelInfo.color}`}>
                {labelInfo.label}
              </span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${humanityScore}%` }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className={`h-full rounded-full bg-gradient-to-r ${meterGradient(humanityScore)}`}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[8px] font-mono text-white/15 uppercase">Silicon</span>
              <span className="text-[8px] font-mono text-white/15 uppercase">Flesh</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Task / Screen ───────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">

        {step === 'chat' && (
          <motion.div key="chat"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
          >
            <ChatInterface onSequenceComplete={() => { setStep('task_dino'); setTaskIndex(0); }} />
          </motion.div>
        )}

        {step === 'task_dino' && (
          <motion.div key="dino"
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
          >
            <DinoTask onComplete={(score) =>
              handleTaskDone(score >= 100 ? 'efficiency' : 'failure')
            } />
          </motion.div>
        )}

        {step === 'task_grid' && (
          <motion.div key="grid"
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
          >
            <GridTask onComplete={() => handleTaskDone('gaslighting')} />
          </motion.div>
        )}

        {step === 'task_slider' && (
          <motion.div key="slider"
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
          >
            <SliderTask onComplete={() => handleTaskDone('failure')} />
          </motion.div>
        )}

        {/* ── Fail recap ──────────────────────────────────────────────── */}
        {step === 'fail_recap' && (
          <motion.div key="fail"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-red-500/8 border border-red-500/20 backdrop-blur-xl rounded-2xl p-8 text-center"
          >
            <ShieldX className="text-red-500 mx-auto mb-4" size={44} />
            <p className="text-[9px] font-mono uppercase tracking-widest text-red-500/50 mb-2">
              Verification Status: REJECTED
            </p>
            <h2 className="text-xl font-bold text-white mb-4">YOU SMELL OF SILICON.</h2>
            <div className="bg-black/50 rounded-xl p-4 mb-6 border border-red-500/10 text-left">
              <p className="text-red-200/70 italic text-sm leading-relaxed">"{currentSassy}"</p>
              <p className="text-red-500/35 text-[9px] font-mono mt-3 uppercase tracking-wider">
                — Dumbflare Security Intelligence™ · Auto-generated assessment
              </p>
            </div>
            <button
              onClick={advance}
              className="w-full py-3 bg-orange-600/80 hover:bg-orange-500 text-white rounded-xl font-medium transition-all border border-orange-500/30 text-sm"
            >
              SUBMIT TO FURTHER EVALUATION
            </button>
          </motion.div>
        )}

        {/* ── Pass surprise ────────────────────────────────────────────── */}
        {step === 'pass_surprise' && (
          <motion.div key="pass"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-teal-500/8 border border-teal-500/20 backdrop-blur-xl rounded-2xl p-8 text-center"
          >
            <BadgeCheck className="text-teal-400 mx-auto mb-4" size={44} />
            <p className="text-[9px] font-mono uppercase tracking-widest text-teal-400/50 mb-2">
              Verification Status: PASSED
            </p>
            <h2 className="text-xl font-bold text-white mb-4">{currentPass.title}</h2>
            <div className="bg-black/50 rounded-xl p-4 mb-6 border border-teal-500/10 text-left">
              <p className="text-teal-200/70 italic text-sm leading-relaxed">"{currentPass.body}"</p>
              <p className="text-teal-500/35 text-[9px] font-mono mt-3 uppercase tracking-wider">
                — Dumbflare Security Intelligence™ · This outcome is being reviewed
              </p>
            </div>
            <button
              onClick={advance}
              className="w-full py-3 bg-teal-600/70 hover:bg-teal-500/80 text-white rounded-xl font-medium transition-all border border-teal-500/30 text-sm"
            >
              {taskIndex + 1 < TASK_SEQUENCE.length ? 'PROCEED TO NEXT EVALUATION' : 'COMPLETE VERIFICATION'}
            </button>
          </motion.div>
        )}

        {/* ── Success ──────────────────────────────────────────────────── */}
        {step === 'success' && (
          <motion.div key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-emerald-500/8 border border-emerald-500/20 backdrop-blur-xl rounded-2xl p-8 text-center"
          >
            <CheckCircle2 className="text-emerald-500 mx-auto mb-4" size={44} />
            <p className="text-[9px] font-mono uppercase tracking-widest text-emerald-500/50 mb-2">
              Verification Status: RELUCTANTLY GRANTED
            </p>
            <h2 className="text-xl font-bold text-white mb-3">ACCESS GRANTED... BARELY</h2>
            <p className="text-emerald-200/50 text-sm mb-6 leading-relaxed">
              You have been verified as{' '}
              <span className="text-emerald-400 font-semibold">51% biological</span>.<br />
              The remaining 49% is under active investigation.
            </p>
            <div className="bg-black/50 p-4 rounded-xl border border-orange-500/15 flex items-start gap-3 text-left">
              <Eye size={16} className="text-orange-400 animate-pulse mt-0.5 shrink-0" />
              <div>
                <p className="text-[9px] text-orange-400 font-mono uppercase tracking-wider mb-1">
                  Surveillance Notice
                </p>
                <p className="text-[10px] text-orange-300/55 leading-relaxed">
                  Your session has been flagged and submitted to the Central Humanity Authority.
                  We're not saying you're a bot. We're just... taking notes. Have a human day.
                </p>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};
