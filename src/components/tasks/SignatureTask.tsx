import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '../../lib/LocaleContext';
import type { TaskReason } from '../../lib/i18n/types';

interface SignatureTaskProps {
  onComplete: (reason: TaskReason) => void;
}

type Phase = 'drawing' | 'analyzing' | 'verdict';

interface Point { x: number; y: number }

const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const SignatureTask: React.FC<SignatureTaskProps> = ({ onComplete }) => {
  const { data } = useLocale();
  const { ui } = data;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawingRef = useRef(false);
  const pointsRef = useRef<Point[]>([]);
  const strokesRef = useRef<Point[][]>([]);
  const currentStrokeRef = useRef<Point[]>([]);

  const [phase, setPhase] = useState<Phase>('drawing');
  const [verdict, setVerdict] = useState('');
  const [analyzeMsg, setAnalyzeMsg] = useState('');
  const [hasStrokes, setHasStrokes] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'rgba(255,255,255,0.03)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(255,200,100,0.15)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);
    ctx.beginPath();
    ctx.moveTo(20, canvas.height - 24);
    ctx.lineTo(canvas.width - 20, canvas.height - 24);
    ctx.stroke();
    ctx.setLineDash([]);
  }, []);

  const getPos = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement): Point => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if ('touches' in e) {
      const t = e.touches[0];
      return { x: (t.clientX - rect.left) * scaleX, y: (t.clientY - rect.top) * scaleY };
    }
    return { x: ((e as React.MouseEvent).clientX - rect.left) * scaleX, y: ((e as React.MouseEvent).clientY - rect.top) * scaleY };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    if (phase !== 'drawing') return;
    e.preventDefault();
    const canvas = canvasRef.current!;
    drawingRef.current = true;
    currentStrokeRef.current = [];
    const pos = getPos(e, canvas);
    currentStrokeRef.current.push(pos);
    pointsRef.current.push(pos);

    const ctx = canvas.getContext('2d')!;
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!drawingRef.current || phase !== 'drawing') return;
    e.preventDefault();
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const pos = getPos(e, canvas);
    currentStrokeRef.current.push(pos);
    pointsRef.current.push(pos);

    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = 'rgba(251,191,36,0.9)';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const endDraw = () => {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    if (currentStrokeRef.current.length > 1) {
      strokesRef.current.push([...currentStrokeRef.current]);
      setHasStrokes(true);
    }
    currentStrokeRef.current = [];
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255,255,255,0.03)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(255,200,100,0.15)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);
    ctx.beginPath();
    ctx.moveTo(20, canvas.height - 24);
    ctx.lineTo(canvas.width - 20, canvas.height - 24);
    ctx.stroke();
    ctx.setLineDash([]);
    pointsRef.current = [];
    strokesRef.current = [];
    setHasStrokes(false);
  };

  const analyzeSignature = () => {
    const points = pointsRef.current;
    if (points.length < 5) {
      setVerdict(ui.signatureResultTooShort);
      setPhase('analyzing');
      runAnalysis('failure');
      return;
    }

    let msgIdx = 0;
    const interval = setInterval(() => {
      setAnalyzeMsg(ui.signatureAnalyzing[msgIdx % 4]);
      msgIdx++;
    }, 600);
    setPhase('analyzing');

    setTimeout(() => {
      clearInterval(interval);

      const n = points.length;
      let reason: TaskReason = 'failure';
      let msg: string;

      if (n < 20) {
        msg = ui.signatureResultTooShort;
      } else if (n > 800) {
        msg = ui.signatureResultTooLong;
        reason = 'efficiency';
      } else {
        // Smoothness: average angle change between consecutive segments
        let totalAngleChange = 0;
        let segments = 0;
        for (let i = 2; i < points.length; i++) {
          const a = Math.atan2(points[i - 1].y - points[i - 2].y, points[i - 1].x - points[i - 2].x);
          const b = Math.atan2(points[i].y - points[i - 1].y, points[i].x - points[i - 1].x);
          let diff = Math.abs(b - a);
          if (diff > Math.PI) diff = 2 * Math.PI - diff;
          totalAngleChange += diff;
          segments++;
        }
        const avgAngle = segments > 0 ? totalAngleChange / segments : 0;

        if (avgAngle < 0.08) {
          msg = ui.signatureResultTooClean;
          reason = 'efficiency';
        } else if (avgAngle > 1.1) {
          msg = ui.signatureResultTooMessy;
        } else {
          msg = ui.signatureResultTooMessy;
        }
      }

      setVerdict(msg);
      setPhase('verdict');
      setTimeout(() => onComplete(reason), 2000);
    }, 2600);
  };

  const runAnalysis = (reason: TaskReason) => {
    let msgIdx = 0;
    const interval = setInterval(() => {
      setAnalyzeMsg(ui.signatureAnalyzing[msgIdx % 4]);
      msgIdx++;
    }, 600);
    setTimeout(() => {
      clearInterval(interval);
      setPhase('verdict');
      setTimeout(() => onComplete(reason), 2000);
    }, 2600);
  };

  return (
    <div className="w-full bg-black/45 backdrop-blur-xl border border-white/8 rounded-2xl overflow-hidden shadow-2xl">
      <div className="px-5 py-3 border-b border-white/8 bg-white/3">
        <span className="text-xs font-mono text-white/60 tracking-wide">{ui.signatureHeader}</span>
      </div>

      <div className="p-5 space-y-4">
        <AnimatePresence mode="wait">

          {phase === 'drawing' && (
            <motion.div key="drawing"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <p className="text-white/70 text-sm text-center">{ui.signaturePrompt}</p>

              <canvas
                ref={canvasRef}
                width={440}
                height={160}
                className="w-full rounded-xl border border-white/10 touch-none cursor-crosshair"
                style={{ background: 'rgba(255,255,255,0.02)' }}
                onMouseDown={startDraw}
                onMouseMove={draw}
                onMouseUp={endDraw}
                onMouseLeave={endDraw}
                onTouchStart={startDraw}
                onTouchMove={draw}
                onTouchEnd={endDraw}
              />

              <p className="text-white/25 text-[10px] text-center font-mono">{ui.signatureNote}</p>

              <div className="flex gap-3">
                <button
                  onClick={clearCanvas}
                  className="flex-1 py-2.5 bg-white/5 hover:bg-white/8 border border-white/10 text-white/50 rounded-xl font-mono text-[11px] uppercase tracking-wider transition-all"
                >
                  {ui.signatureClear}
                </button>
                <button
                  onClick={analyzeSignature}
                  disabled={!hasStrokes}
                  className="flex-1 py-2.5 bg-orange-600/70 hover:bg-orange-500/80 disabled:opacity-30 disabled:cursor-not-allowed border border-orange-500/30 text-white rounded-xl font-mono text-[11px] uppercase tracking-wider transition-all"
                >
                  {ui.signatureSubmit}
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
                {analyzeMsg || ui.signatureAnalyzing[0]}
              </p>
            </motion.div>
          )}

          {phase === 'verdict' && (
            <motion.div key="verdict"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              className="py-2 space-y-3"
            >
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                <p className="text-red-200/80 text-sm leading-relaxed italic">"{verdict}"</p>
                <p className="text-red-500/35 text-[9px] font-mono mt-3 uppercase tracking-wider">
                  — Calligraphic Forensics Division™
                </p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};
