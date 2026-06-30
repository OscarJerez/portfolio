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
