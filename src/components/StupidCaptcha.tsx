import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatInterface } from './ChatInterface';
import { DinoTask } from './tasks/DinoTask';
import { GridTask } from './tasks/GridTask';
import { SliderTask } from './tasks/SliderTask';
import { TrolleyTask } from './tasks/TrolleyTask';
import { SignatureTask } from './tasks/SignatureTask';
import { MazeTask } from './tasks/MazeTask';
import { getSassyResponse, getHumanityScore, getHumanityLabel, pickMood } from '../lib/SassyEngine';
import { LocaleProvider, useLocale } from '../lib/LocaleContext';
import { CheckCircle2, ShieldX, Eye, BadgeCheck } from 'lucide-react';
import type { Locale, TaskReason } from '../lib/i18n/types';

type TaskStep = 'task_dino' | 'task_grid' | 'task_slider' | 'task_trolley' | 'task_signature' | 'task_maze';
type Step = 'chat' | TaskStep | 'success' | 'fail_recap' | 'pass_surprise';

const ALL_TASKS: TaskStep[] = ['task_dino', 'task_grid', 'task_slider', 'task_trolley', 'task_signature', 'task_maze'];

const PASS_CHANCE: Record<TaskStep, number> = {
  task_dino: 0.18,
  task_grid: 0.25,
  task_slider: 0.15,
  task_trolley: 0.22,
  task_signature: 0.20,
  task_maze: 0.12,
};

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const buildSession = (): TaskStep[] => {
  const count = Math.floor(Math.random() * 3) + 1; // 1–3
  return shuffle(ALL_TASKS).slice(0, count);
};

const meterGradient = (score: number) => {
  if (score >= 100) return 'from-emerald-600 to-emerald-400';
  if (score >= 67)  return 'from-yellow-600 to-yellow-400';
  if (score >= 34)  return 'from-orange-600 to-orange-400';
  return 'from-red-700 to-red-500';
};

interface StupidCaptchaProps {
  onVerified?: () => void;
  locale?: Locale;
}

const CaptchaInner: React.FC<{ onVerified?: () => void }> = ({ onVerified }) => {
  const { locale, data } = useLocale();
  const { ui, passLines } = data;

  const session = useMemo(() => buildSession(), []);

  const [step, setStep]               = useState<Step>('chat');
  const [taskIndex, setTaskIndex]     = useState(0);
  const [failCount, setFailCount]     = useState(0);
  const [currentSassy, setCurrentSassy] = useState('');
  const [currentPass, setCurrentPass]   = useState(passLines[0]);

  const humanityScore = getHumanityScore(failCount);
  const labelInfo     = getHumanityLabel(humanityScore, locale);

  const handleTaskDone = (reason: TaskReason) => {
    const currentTask = session[taskIndex];
    const roll = Math.random();
    const passed = roll < PASS_CHANCE[currentTask];

    if (passed) {
      setCurrentPass(passLines[Math.floor(Math.random() * passLines.length)]);
      setStep('pass_surprise');
    } else {
      setCurrentSassy(getSassyResponse(reason, pickMood(), locale));
      setFailCount(f => f + 1);
      setStep('fail_recap');
    }
  };

  const advance = () => {
    const next = taskIndex + 1;
    setTaskIndex(next);
    if (next < session.length) {
      setStep(session[next]);
    } else {
      setStep('success');
      onVerified?.();
    }
  };

  const currentTask = session[taskIndex] as TaskStep | undefined;

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
                {ui.believabilityIndex}
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
              <span className="text-[8px] font-mono text-white/15 uppercase">{ui.silicon}</span>
              <span className="text-[8px] font-mono text-white/15 uppercase">{ui.flesh}</span>
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
            <ChatInterface onSequenceComplete={() => { setStep(session[0]); setTaskIndex(0); }} />
          </motion.div>
        )}

        {step === 'task_dino' && (
          <motion.div key="dino"
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
          >
            <DinoTask onComplete={(score) => handleTaskDone(score >= 100 ? 'efficiency' : 'failure')} />
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

        {step === 'task_trolley' && (
          <motion.div key="trolley"
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
          >
            <TrolleyTask onComplete={handleTaskDone} />
          </motion.div>
        )}

        {step === 'task_signature' && (
          <motion.div key="signature"
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
          >
            <SignatureTask onComplete={handleTaskDone} />
          </motion.div>
        )}

        {step === 'task_maze' && (
          <motion.div key="maze"
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
          >
            <MazeTask onComplete={handleTaskDone} />
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
              {ui.verificationRejected}
            </p>
            <h2 className="text-xl font-bold text-white mb-4">{ui.youSmellOfSilicon}</h2>
            <div className="bg-black/50 rounded-xl p-4 mb-6 border border-red-500/10 text-left">
              <p className="text-red-200/70 italic text-sm leading-relaxed">"{currentSassy}"</p>
              <p className="text-red-500/35 text-[9px] font-mono mt-3 uppercase tracking-wider">
                {ui.sassyAttribution}
              </p>
            </div>
            <button
              onClick={advance}
              className="w-full py-3 bg-orange-600/80 hover:bg-orange-500 text-white rounded-xl font-medium transition-all border border-orange-500/30 text-sm"
            >
              {ui.submitToFurtherEvaluation}
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
              {ui.verificationPassed}
            </p>
            <h2 className="text-xl font-bold text-white mb-4">{currentPass.title}</h2>
            <div className="bg-black/50 rounded-xl p-4 mb-6 border border-teal-500/10 text-left">
              <p className="text-teal-200/70 italic text-sm leading-relaxed">"{currentPass.body}"</p>
              <p className="text-teal-500/35 text-[9px] font-mono mt-3 uppercase tracking-wider">
                {ui.passAttribution}
              </p>
            </div>
            <button
              onClick={advance}
              className="w-full py-3 bg-teal-600/70 hover:bg-teal-500/80 text-white rounded-xl font-medium transition-all border border-teal-500/30 text-sm"
            >
              {taskIndex + 1 < session.length ? ui.proceedToNextEvaluation : ui.completeVerification}
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
              {ui.verificationReluctantlyGranted}
            </p>
            <h2 className="text-xl font-bold text-white mb-3">{ui.accessGrantedBarely}</h2>
            <p className="text-emerald-200/50 text-sm mb-6 leading-relaxed">
              {ui.biologicalVerdict}<br />
              {ui.underInvestigation}
            </p>
            <div className="bg-black/50 p-4 rounded-xl border border-orange-500/15 flex items-start gap-3 text-left">
              <Eye size={16} className="text-orange-400 animate-pulse mt-0.5 shrink-0" />
              <div>
                <p className="text-[9px] text-orange-400 font-mono uppercase tracking-wider mb-1">
                  {ui.surveillanceTitle}
                </p>
                <p className="text-[10px] text-orange-300/55 leading-relaxed">
                  {ui.surveillanceText}
                </p>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export const StupidCaptcha: React.FC<StupidCaptchaProps> = ({ onVerified, locale }) => (
  <LocaleProvider locale={locale}>
    <CaptchaInner onVerified={onVerified} />
  </LocaleProvider>
);
