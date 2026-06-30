Replace the existing portfolio components with the new animated design below.
This is a Next.js project using src/app/ and src/components/.

Create/replace these files exactly as written:

═══════════════════════════════════════════════════
FILE: src/components/ParticleBackground.jsx (NEW FILE)
═══════════════════════════════════════════════════

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

═══════════════════════════════════════════════════
FILE: src/components/RoleTyper.jsx (NEW FILE)
═══════════════════════════════════════════════════

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

═══════════════════════════════════════════════════
FILE: src/components/CodeTyper.jsx (NEW FILE)
═══════════════════════════════════════════════════

'use client';
import { useEffect, useRef } from 'react';

export default function CodeTyper() {
  const codeRef = useRef(null);
  const wrapRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = codeRef.current;
    const wrap = wrapRef.current;
    if (!el) return;

    const code = [
      'public class OscarJerez : IDeveloper',
      '{',
      '    public string Location   => "Sweden";',
      '    public bool   OpenToWork => true;',
      '',
      '    public Stack[] MyStack => new[]',
      '    {',
      '        new(".NET 8",  "C#"),',
      '        new("React",   "TypeScript"),',
      '        new("FastAPI", "Python"),',
      '        new("Next.js", "Tailwind"),',
      '    };',
      '}'
    ].join('\n');

    const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const highlight = (src) => {
      const re = /("(?:[^"\\]|\\.)*")|(\/\/[^\n]*)|\b(public|class|string|bool|int|new|return|true|false|void|var|using|namespace|null)\b|\b([A-Z][A-Za-z0-9_]*)\b/g;
      return esc(src).replace(re, (m, str, com, kw, type) => {
        if (str) return '<span style="color:#86efac">' + str + '</span>';
        if (com) return '<span style="color:#64748b">' + com + '</span>';
        if (kw) return '<span style="color:#38bdf8">' + kw + '</span>';
        if (type) return '<span style="color:#5eead4">' + type + '</span>';
        return m;
      });
    };
    const cursor = '<span style="display:inline-block;width:7px;height:1.05em;background:#5eead4;vertical-align:-0.16em;animation:blink 1s step-end infinite"></span>';

    let i = 0, timer;
    const type = () => {
      i++;
      el.innerHTML = highlight(code.slice(0, i)) + (i < code.length ? cursor : '');
      if (i < code.length) {
        const ch = code[i - 1];
        timer = setTimeout(type, ch === '\n' ? 90 : (Math.random() * 22 + 14));
      } else {
        el.innerHTML = highlight(code);
      }
    };

    const start = () => { if (!startedRef.current) { startedRef.current = true; timer = setTimeout(type, 400); } };
    const check = () => {
      if (startedRef.current) return;
      const target = wrap || el;
      const r = target.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh - 40 && r.bottom > 0) { start(); window.removeEventListener('scroll', check); }
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    const fs = setTimeout(start, 1200);

    return () => {
      window.removeEventListener('scroll', check);
      clearTimeout(timer);
      clearTimeout(fs);
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ animation: 'revealFade .8s ease both, floaty 7s ease-in-out infinite' }}>
      <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(148,163,184,0.16)', background: 'rgba(2,6,23,0.72)', backdropFilter: 'blur(8px)', boxShadow: '0 30px 70px -25px rgba(0,0,0,0.7), 0 0 0 1px rgba(34,211,238,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '13px 16px', borderBottom: '1px solid rgba(148,163,184,0.12)', background: 'rgba(15,23,42,0.6)' }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#f87171' }}></span>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#fbbf24' }}></span>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#34d399' }}></span>
          <span style={{ marginLeft: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#64748b' }}>OscarJerez.cs</span>
        </div>
        <pre style={{ margin: 0, padding: '22px 22px 26px', overflow: 'hidden' }}>
          <code ref={codeRef} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13.5, lineHeight: 1.75, color: '#cbd5e1', whiteSpace: 'pre-wrap' }}></code>
        </pre>
      </div>
    </div>
  );
}

═══════════════════════════════════════════════════
FILE: src/components/Reveal.jsx (NEW FILE — scroll reveal wrapper)
═══════════════════════════════════════════════════

'use client';
import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const r = el.getBoundingClientRect();
      if (r.top < vh - 50 && r.bottom > 0) setVisible(true);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    const failsafe = setTimeout(() => setVisible(true), 1400);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      clearTimeout(failsafe);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

═══════════════════════════════════════════════════
FILE: src/components/SkillBar.jsx (NEW FILE)
═══════════════════════════════════════════════════

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

═══════════════════════════════════════════════════
FILE: src/components/Hero.jsx (REPLACE ENTIRE FILE)
═══════════════════════════════════════════════════

'use client';
import RoleTyper from './RoleTyper';
import CodeTyper from './CodeTyper';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <header id="top" style={{ position: 'relative', zIndex: 1, maxWidth: 1120, margin: '0 auto', padding: '150px 28px 90px', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }}>
      <Reveal>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '7px 14px', borderRadius: 999, border: '1px solid rgba(52,211,153,0.35)', background: 'rgba(52,211,153,0.07)', fontSize: 13, fontWeight: 500, color: '#6ee7b7', marginBottom: 28 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399', animation: 'pulse 2s infinite' }}></span>
          Open to work · Sweden / Remote / Hybrid
        </div>
        <h1 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 'clamp(42px,6vw,68px)', lineHeight: 1.02, letterSpacing: '-0.03em', marginBottom: 18 }}>
          Oscar Jerez
        </h1>
        <RoleTyper />
        <p style={{ fontSize: 17, lineHeight: 1.65, color: '#94a3b8', maxWidth: 480, marginBottom: 34 }}>
          Fullstack developer from Sweden building clean, reliable products across the .NET and React ecosystems — from API to interface.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 46 }}>
          <a href="#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 15, fontWeight: 600, padding: '13px 24px', borderRadius: 11, background: 'linear-gradient(135deg,#22d3ee,#38bdf8)', color: '#0f172a', boxShadow: '0 10px 30px -8px rgba(34,211,238,0.5)' }}>
            View projects →
          </a>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 15, fontWeight: 600, padding: '13px 24px', borderRadius: 11, border: '1px solid rgba(148,163,184,0.25)', color: '#e2e8f0', background: 'rgba(255,255,255,0.02)' }}>
            Get in touch
          </a>
        </div>
        <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
          {[['2', 'LIA Internships'], ['8+', 'Projects'], ['3', 'Languages']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 30, fontWeight: 700, background: 'linear-gradient(135deg,#22d3ee,#60a5fa)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{num}</div>
              <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      </Reveal>
      <CodeTyper />
    </header>
  );
}

═══════════════════════════════════════════════════
FILE: src/components/About.jsx (REPLACE ENTIRE FILE)
═══════════════════════════════════════════════════

'use client';
import Reveal from './Reveal';

const HIGHLIGHTS = [
  {
    title: 'Clean Architecture',
    desc: 'I default to Clean Architecture and CQRS, keeping code testable and easy to change.',
    icon: <rect x="3" y="3" width="7" height="7" rx="1.5" />,
  },
];

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', zIndex: 1, maxWidth: 1120, margin: '0 auto', padding: '60px 28px 70px' }}>
      <Reveal style={{ marginBottom: 36 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: '#22d3ee', marginBottom: 10 }}>// about me</div>
        <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-0.02em' }}>From the road to the codebase</h2>
      </Reveal>
      <Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 44, alignItems: 'start' }}>
          <div style={{ fontSize: 16, lineHeight: 1.75, color: '#94a3b8' }}>
            <p style={{ marginBottom: 18 }}>
              I'm a newly graduated fullstack developer from <span style={{ color: '#e2e8f0', fontWeight: 600 }}>NBI Handelsakademin, Göteborg 2026</span>. I completed two internships (LIA) in real production environments:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '0 0 22px', paddingLeft: 18, borderLeft: '2px solid rgba(34,211,238,0.3)' }}>
              <div><span style={{ color: '#e2e8f0', fontWeight: 600 }}>TMY Life / NutriWize</span> — built a Python/FastAPI backend for nutritional data.</div>
              <div><span style={{ color: '#e2e8f0', fontWeight: 600 }}>InFiNet Code AB</span> — shipped features end-to-end on a fullstack .NET + Next.js e-learning platform.</div>
            </div>
            <p style={{ marginBottom: 18 }}>
              Before switching to software I spent <span style={{ color: '#e2e8f0', fontWeight: 600 }}>18 years as a professional driver</span> — which taught me punctuality, responsibility and staying calm under pressure. I bring those same qualities to code: I take ownership, communicate clearly and ship clean, testable work.
            </p>
            <p style={{ marginBottom: 0 }}>
              Outside work I'm one of the leaders at <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Bohus Taekwon-Do</span> in Nödinge and I'm currently building <span style={{ color: '#22d3ee', fontWeight: 600 }}>Conversa</span> (AI chat widget for Swedish e-commerce) and <span style={{ color: '#22d3ee', fontWeight: 600 }}>Clarity</span> (Android habit tracker in Kotlin).
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ padding: 22, borderRadius: 16, border: '1px solid rgba(148,163,184,0.14)', background: 'rgba(255,255,255,0.025)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
                <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 16, color: '#e2e8f0' }}>Clean Architecture</span>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: '#94a3b8', margin: 0 }}>I default to Clean Architecture and CQRS, keeping code testable and easy to change.</p>
            </div>
            <div style={{ padding: 22, borderRadius: 16, border: '1px solid rgba(148,163,184,0.14)', background: 'rgba(255,255,255,0.025)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20" /><path d="M2 7l10 5 10-5" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                </svg>
                <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 16, color: '#e2e8f0' }}>Full Stack End-to-End</span>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: '#94a3b8', margin: 0 }}>From .NET APIs and PostgreSQL to React frontends and Vercel deployments.</p>
            </div>
            <div style={{ padding: 22, borderRadius: 16, border: '1px solid rgba(148,163,184,0.14)', background: 'rgba(255,255,255,0.025)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 16, color: '#e2e8f0' }}>Team Player</span>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: '#94a3b8', margin: 0 }}>Agile teams, Git branching, pull requests and code review as standard workflow.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

═══════════════════════════════════════════════════
FILE: src/components/Skills.jsx (REPLACE ENTIRE FILE)
═══════════════════════════════════════════════════

'use client';
import Reveal from './Reveal';
import SkillBar from './SkillBar';

const SKILLS = [
  ['C# / .NET 8', 92],
  ['React / TypeScript', 88],
  ['Python / FastAPI', 82],
  ['Next.js / Tailwind', 85],
  ['SQL / EF Core', 80],
  ['Docker / Azure', 74],
];

export default function Skills() {
  return (
    <section id="skills" style={{ position: 'relative', zIndex: 1, maxWidth: 1120, margin: '0 auto', padding: '60px 28px 80px' }}>
      <Reveal style={{ marginBottom: 44 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: '#22d3ee', marginBottom: 10 }}>// skills</div>
        <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-0.02em' }}>What I work with</h2>
      </Reveal>
      <Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px 56px' }}>
          {SKILLS.map(([label, pct]) => <SkillBar key={label} label={label} percent={pct} />)}
        </div>
      </Reveal>
    </section>
  );
}

═══════════════════════════════════════════════════
FILE: src/components/Projects.jsx (REPLACE ENTIRE FILE)
═══════════════════════════════════════════════════

'use client';
import Reveal from './Reveal';

const PROJECTS = [
  { name: 'AsyncGuard', desc: 'Resilience toolkit for async .NET workflows with retry & circuit-breaker policies.', tags: ['C#', '.NET 8'] },
  { name: 'ClubSite', desc: 'Full-stack site for a local club with membership and events management.', tags: ['React', '.NET'] },
  { name: 'Clarity', desc: 'Minimal note-taking app focused on speed and a keyboard-first flow.', tags: ['Next.js', 'TS'] },
  { name: 'PersonalAgent', desc: 'LLM-powered assistant that automates everyday developer tasks.', tags: ['Python', 'FastAPI'] },
  { name: 'HabitTracker2', desc: 'Habit-tracking PWA with streaks, reminders and progress analytics.', tags: ['React', 'TS'] },
  { name: 'Gym Booking System', desc: 'Booking platform with schedules, capacity limits and admin tools.', tags: ['C#', 'EF Core'] },
  { name: 'Glossary Trainer', desc: 'Spaced-repetition vocabulary trainer for language learners.', tags: ['React', 'Python'] },
  { name: 'CMS-Platform', desc: 'Headless CMS with role-based access and a modular content editor.', tags: ['.NET', 'React'] },
];

export default function Projects() {
  return (
    <section id="projects" style={{ position: 'relative', zIndex: 1, maxWidth: 1120, margin: '0 auto', padding: '60px 28px 80px' }}>
      <Reveal style={{ marginBottom: 44 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: '#22d3ee', marginBottom: 10 }}>// projects</div>
        <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-0.02em' }}>Selected work</h2>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={(i % 4) * 60}>
            <a
              href="https://github.com/OscarJerez"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{ display: 'flex', flexDirection: 'column', padding: 22, borderRadius: 16, border: '1px solid rgba(148,163,184,0.14)', background: 'rgba(255,255,255,0.025)', minHeight: 188, textDecoration: 'none', color: 'inherit', transition: 'transform .35s ease, box-shadow .35s ease, border-color .35s ease' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 18 }}>{p.name}</span>
                <span style={{ color: '#22d3ee', fontSize: 18 }}>↗</span>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: '#94a3b8', flex: 1 }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginTop: 16 }}>
                {p.tags.map((tag, ti) => (
                  <span key={tag} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, padding: '4px 9px', borderRadius: 6, background: ti === 0 ? 'rgba(34,211,238,0.1)' : 'rgba(148,163,184,0.1)', color: ti === 0 ? '#22d3ee' : '#94a3b8' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

═══════════════════════════════════════════════════
FILE: src/components/Contact.jsx (REPLACE ENTIRE FILE)
═══════════════════════════════════════════════════

'use client';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1, maxWidth: 1120, margin: '0 auto', padding: '70px 28px 60px' }}>
      <Reveal>
        <div style={{ borderRadius: 24, border: '1px solid rgba(148,163,184,0.16)', background: 'linear-gradient(160deg,rgba(34,211,238,0.07),rgba(59,130,246,0.04))', padding: 'clamp(36px,6vw,64px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: '#22d3ee', marginBottom: 14 }}>// let's build something</div>
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(30px,5vw,48px)', letterSpacing: '-0.02em', marginBottom: 18 }}>Get In Touch</h2>
          <p style={{ fontSize: 17, color: '#94a3b8', maxWidth: 480, margin: '0 auto 16px', lineHeight: 1.6 }}>
            Open to junior and fullstack roles across Sweden — on-site, hybrid, or remote. Let's talk.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#cbd5e1', marginBottom: 36 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" />
            </svg>
            Greater Gothenburg Area · Open to hybrid &amp; remote
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 520, margin: '0 auto' }}>
            <a href="mailto:oscj87@gmail.com" aria-label="Email Oscar" className="contact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '26px 16px', borderRadius: 16, border: '1px solid rgba(148,163,184,0.16)', background: 'rgba(255,255,255,0.025)', textDecoration: 'none', transition: 'transform .3s ease, border-color .3s ease, background .3s ease' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2.5" /><path d="m3 7 9 6 9-6" />
              </svg>
              <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 15, color: '#e2e8f0' }}>Email</span>
            </a>
            <a href="https://github.com/OscarJerez" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="contact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '26px 16px', borderRadius: 16, border: '1px solid rgba(148,163,184,0.16)', background: 'rgba(255,255,255,0.025)', textDecoration: 'none', transition: 'transform .3s ease, border-color .3s ease, background .3s ease' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#22d3ee">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
              </svg>
              <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 15, color: '#e2e8f0' }}>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/oscar-jerez-arias-555b91347" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="contact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '26px 16px', borderRadius: 16, border: '1px solid rgba(148,163,184,0.16)', background: 'rgba(255,255,255,0.025)', textDecoration: 'none', transition: 'transform .3s ease, border-color .3s ease, background .3s ease' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#22d3ee">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
              </svg>
              <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 15, color: '#e2e8f0' }}>LinkedIn</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

═══════════════════════════════════════════════════
FILE: src/components/Footer.jsx (REPLACE ENTIRE FILE)
═══════════════════════════════════════════════════

export default function Footer() {
  return (
    <div style={{ textAlign: 'center', color: '#475569', fontSize: 13, padding: '0 28px 46px' }}>
      © 2026 Oscar Jerez · Built with C#, coffee &amp; curiosity
    </div>
  );
}

═══════════════════════════════════════════════════
FILE: src/components/Header.jsx (REPLACE ENTIRE FILE — navbar)
═══════════════════════════════════════════════════

export default function Header() {
  const links = [
    ['About', '#about'],
    ['Stack', '#stack'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
  ];
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', background: 'rgba(15,23,42,0.55)', borderBottom: '1px solid rgba(148,163,184,0.12)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '16px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: '-0.01em', textDecoration: 'none', color: 'inherit' }}>
          <span style={{ width: 26, height: 26, borderRadius: 7, background: 'linear-gradient(135deg,#22d3ee,#3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f172a', fontSize: 13, fontWeight: 800 }}>OJ</span>
          Oscar Jerez
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {links.map(([label, href]) => (
            <a key={href} href={href} style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'none' }}>{label}</a>
          ))}
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14, fontWeight: 600, padding: '9px 16px', borderRadius: 9, border: '1px solid rgba(34,211,238,0.4)', color: '#22d3ee', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

═══════════════════════════════════════════════════
FILE: src/components/Stack.jsx (NEW FILE — the 4-card stack grid)
═══════════════════════════════════════════════════

'use client';
import Reveal from './Reveal';

const STACK = [
  ['01', 'C# / .NET 8', 'Backend & APIs'],
  ['02', 'React / TypeScript', 'Interfaces'],
  ['03', 'Python / FastAPI', 'Services & AI'],
  ['04', 'Next.js / Tailwind', 'Web apps'],
];

export default function Stack() {
  return (
    <section id="stack" style={{ position: 'relative', zIndex: 1, maxWidth: 1120, margin: '0 auto', padding: '40px 28px 70px' }}>
      <Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {STACK.map(([num, title, desc]) => (
            <div key={num} style={{ padding: 22, borderRadius: 14, border: '1px solid rgba(148,163,184,0.14)', background: 'rgba(255,255,255,0.025)' }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#22d3ee', marginBottom: 8 }}>{num}</div>
              <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 16 }}>{title}</div>
              <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 3 }}>{desc}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

═══════════════════════════════════════════════════
FILE: src/app/globals.css (ADD these styles at the end of the existing file — do not remove existing content)
═══════════════════════════════════════════════════

@keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(52,211,153,0.6); }
  70% { box-shadow: 0 0 0 8px rgba(52,211,153,0); }
  100% { box-shadow: 0 0 0 0 rgba(52,211,153,0); }
}
@keyframes floaty { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes revealFade { from { opacity: 0; } to { opacity: 1; } }

.project-card:hover {
  transform: translateY(-7px);
  border-color: rgba(34,211,238,0.55) !important;
  box-shadow: 0 26px 60px -16px rgba(34,211,238,0.42);
}
.contact-card:hover {
  transform: translateY(-5px);
  border-color: rgba(34,211,238,0.5) !important;
  background: rgba(34,211,238,0.06) !important;
}

═══════════════════════════════════════════════════
FILE: src/app/page.jsx (REPLACE ENTIRE FILE)
═══════════════════════════════════════════════════

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stack from '@/components/Stack';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#0f172a', backgroundImage: 'radial-gradient(900px 500px at 80% -5%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(700px 500px at 0% 30%, rgba(34,211,238,0.08), transparent 55%)' }}>
      <ParticleBackground accent="#22d3ee" count={120} />
      <Header />
      <Hero />
      <Stack />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

═══════════════════════════════════════════════════
AFTER ALL FILES ARE CREATED/REPLACED:
═══════════════════════════════════════════════════

1. Run: npm run build
2. Fix any build errors (check import paths match the project's tsconfig/jsconfig aliases — if @/components doesn't resolve, use relative imports like ../components/ instead)
3. Run: npm run dev and confirm the page loads without console errors
4. Commit: "feat: redesign portfolio with particle background, typing effects, scroll reveals and About section"
5. Push to the existing remote
