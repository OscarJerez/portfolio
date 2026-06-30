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
