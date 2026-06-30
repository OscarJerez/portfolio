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
