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
