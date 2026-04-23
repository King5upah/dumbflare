import React, { useState, useEffect } from 'react';
import { StupidCaptcha } from './components/StupidCaptcha';
import './index.css';

const RAY_ID = Math.random().toString(36).substring(2, 18).toUpperCase();

function App() {
  const [dots, setDots] = useState('...');

  useEffect(() => {
    const frames = ['.', '..', '...', '....'];
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % frames.length;
      setDots(frames[i]);
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-6 sm:px-10">
      {/* Header */}
      <div className="text-center mb-10 space-y-3">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="relative select-none" title="The derpy cloud. Judging you.">
            <span className="text-5xl leading-none">☁️</span>
            <span className="absolute -bottom-1 -right-2 text-lg leading-none">🧠</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">
            Dumbflare™
          </h1>
        </div>
        <p className="text-white/40 text-[11px] uppercase tracking-[0.3em] font-mono">
          Continuous Friction as a Service™
        </p>
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-[10px] font-mono text-orange-400/80 uppercase tracking-widest">
            Humanity Scan in Progress{dots}
          </span>
        </div>
      </div>

      <StupidCaptcha />

      {/* Footer */}
      <footer className="mt-20 text-center space-y-1.5">
        <p className="text-white/15 text-[10px] uppercase tracking-widest font-mono">
          © 2026 Dumbflare Systems Inc. · Not responsible for existential crises.
        </p>
        <p className="text-white/10 text-[9px] font-mono">
          Ray ID: {RAY_ID} · Performance: Accusatory · Data Center: [CLASSIFIED]
        </p>
        <p className="text-white/8 text-[9px] font-mono">
          By continuing, you consent to being judged. · Privacy Policy: We are watching.
        </p>
      </footer>
    </div>
  );
}

export default App;
