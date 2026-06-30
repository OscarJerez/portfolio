'use client';
import { useEffect, useRef } from 'react';

export default function RoleTyper() {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const roles = ['Junior Software Engineer', '.NET Developer', 'Fullstack Developer', 'React Developer'];
    let ri = 0, ci = 0, deleting = false;
    let timer;
    const tick = () => {
      const word = roles[ri];
      if (!deleting) {
        ci++;
        el.textContent = word.slice(0, ci);
        if (ci === word.length) { deleting = true; timer = setTimeout(tick, ri === 0 ? 3000 : 1500); return; }
        timer = setTimeout(tick, 70);
      } else {
        ci--;
        el.textContent = word.slice(0, ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; timer = setTimeout(tick, 350); return; }
        timer = setTimeout(tick, 38);
      }
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(22px,3vw,30px)', fontWeight: 600, height: '1.3em', marginBottom: 22, letterSpacing: '-0.01em' }}>
      <span ref={elRef} style={{ color: '#22d3ee' }}></span>
      <span style={{ display: 'inline-block', width: 3, height: '1.05em', background: '#22d3ee', marginLeft: 4, verticalAlign: '-0.16em', animation: 'blink 1s step-end infinite' }}></span>
    </div>
  );
}
