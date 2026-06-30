'use client';
import { useEffect, useRef, useState } from 'react';

export default function SkillBar({ label, percent }) {
  const ref = useRef(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const r = el.getBoundingClientRect();
      if (r.top < vh - 40 && r.bottom > 0) setFilled(true);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    const failsafe = setTimeout(() => setFilled(true), 1600);
    return () => {
      window.removeEventListener('scroll', check);
      clearTimeout(failsafe);
    };
  }, []);

  return (
    <div ref={ref}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 9 }}>
        <span style={{ fontWeight: 600 }}>{label}</span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", color: '#64748b' }}>{percent}%</span>
      </div>
      <div style={{ height: 8, borderRadius: 99, background: 'rgba(148,163,184,0.12)', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: filled ? `${percent}%` : '0%',
          borderRadius: 99,
          background: 'linear-gradient(90deg,#22d3ee,#3b82f6)',
          transition: 'width 1.1s cubic-bezier(.22,1,.36,1)',
        }} />
      </div>
    </div>
  );
}
