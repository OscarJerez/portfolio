'use client';
import { useEffect, useRef } from 'react';

export default function ParticleBackground({ accent = '#22d3ee', count = 120 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, dpr, parts = [];
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const mouse = { x: -9999, y: -9999, active: false };
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; };
    const onLeave = () => { mouse.active = false; };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseout', onLeave);

    const rand = (a, b) => a + Math.random() * (b - a);
    for (let i = 0; i < count; i++) {
      parts.push({ x: Math.random() * w, y: Math.random() * h, vx: rand(-0.45, 0.45), vy: rand(-0.45, 0.45), r: rand(0.8, 2.2) });
    }

    let raf;
    const R = 130, R2 = R * R;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        if (mouse.active) {
          const mdx = mouse.x - p.x, mdy = mouse.y - p.y;
          const md2 = mdx * mdx + mdy * mdy;
          if (md2 < R2 && md2 > 1) {
            const f = (1 - md2 / R2) * 0.06;
            p.vx += (mdx / Math.sqrt(md2)) * f;
            p.vy += (mdy / Math.sqrt(md2)) * f;
          }
        }
        p.vx *= 0.992; p.vy *= 0.992;
        const sp = Math.hypot(p.vx, p.vy);
        if (sp < 0.18) { const s = 0.18 / (sp || 1); p.vx *= s; p.vy *= s; }
        if (sp > 1.6) { const s = 1.6 / sp; p.vx *= s; p.vy *= s; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.globalAlpha = 0.55;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i], b = parts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 16000) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = accent;
            ctx.globalAlpha = (1 - d2 / 16000) * 0.18;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [accent, count]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
