'use client';
import Reveal from './Reveal';

const PROJECTS = [
  {
    name: 'AsyncGuard',
    desc: 'Resilience toolkit for async .NET workflows with retry & circuit-breaker policies.',
    tags: ['C#', '.NET 8'],
    purpose: "Wraps calls to unreliable dependencies in retry, timeout, and circuit-breaker policies so transient failures don't cascade.",
    useCase: 'Calling a flaky third-party API and you want automatic retries with backoff, or a circuit breaker to stop hammering a downed service.',
  },
  {
    name: 'ClubSite',
    desc: 'Full-stack site for a local club with membership and events management.',
    tags: ['React', '.NET'],
    purpose: 'Handles member registration, membership tiers, event scheduling, and sign-ups for local clubs.',
    useCase: 'A sports club needs one place to manage members, publish events, and take bookings.',
  },
  {
    name: 'Clarity',
    desc: 'Minimal note-taking app focused on speed and a keyboard-first flow.',
    tags: ['Next.js', 'TS'],
    purpose: 'Capture, search, and navigate notes entirely from the keyboard, built for speed.',
    useCase: 'You want to jot a thought mid-task without breaking flow, or need a fast scratchpad that opens instantly.',
  },
  {
    name: 'PersonalAgent',
    desc: 'LLM-powered assistant that automates everyday developer tasks.',
    tags: ['Python', 'FastAPI'],
    purpose: 'Automates repetitive dev chores like scaffolding files, drafting commits, and summarizing PRs.',
    useCase: 'You want to delegate multi-step tasks like reading a log, finding the error, and suggesting a fix.',
  },
  {
    name: 'HabitTracker2',
    desc: 'Habit-tracking PWA with streaks, reminders and progress analytics.',
    tags: ['React', 'TS'],
    purpose: 'Installable, offline-capable PWA with streaks, reminders, and progress analytics.',
    useCase: 'Building a daily habit and you need visual streaks to stay consistent.',
  },
  {
    name: 'Gym Booking System',
    desc: 'Booking platform with schedules, capacity limits and admin tools.',
    tags: ['C#', 'EF Core'],
    purpose: 'Class schedules, capacity limits, and admin tools for gyms and studios.',
    useCase: 'Members need to reserve capacity-limited class spots and admins manage schedules.',
    link: 'https://github.com/OscarJerez/GymBookingSystem',
    linkLabel: 'Code',
  },
  {
    name: 'Glossary Trainer',
    desc: 'Spaced-repetition vocabulary trainer for language learners.',
    tags: ['React', 'Python'],
    purpose: "Surfaces words right before you'd forget them to maximize retention.",
    useCase: 'Learning a language and you want efficient vocabulary drilling.',
    link: 'https://glossarytraining.se',
    linkLabel: 'Live',
  },
  {
    name: 'CMS-Platform',
    desc: 'Headless CMS with role-based access and a modular content editor.',
    tags: ['.NET', 'React'],
    purpose: 'Role-based access and a modular editor, serving content via API to any frontend.',
    useCase: 'Editors need a clean admin UI while developers consume content through an API.',
  },
];

function ProjectCardContent({ p }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 18 }}>{p.name}</span>
        {p.link ? (
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#22d3ee' }}>{p.linkLabel} ↗</span>
        ) : null}
      </div>
      <p style={{ fontSize: 13.5, lineHeight: 1.55, color: '#94a3b8', flex: 1 }}>{p.desc}</p>
      <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginTop: 16 }}>
        {p.tags.map((tag, ti) => (
          <span key={tag} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, padding: '4px 9px', borderRadius: 6, background: ti === 0 ? 'rgba(34,211,238,0.1)' : 'rgba(148,163,184,0.1)', color: ti === 0 ? '#22d3ee' : '#94a3b8' }}>
            {tag}
          </span>
        ))}
      </div>
      <div className="project-detail">
        <div className="project-detail-inner">
          <div className="project-detail-label">Purpose</div>
          <p className="project-detail-body">{p.purpose}</p>
          <div className="project-detail-label">Use it when</div>
          <p className="project-detail-body">{p.useCase}</p>
        </div>
      </div>
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ position: 'relative', zIndex: 1, maxWidth: 1120, margin: '0 auto', padding: '60px 28px 80px' }}>
      <Reveal style={{ marginBottom: 44 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: '#22d3ee', marginBottom: 10 }}>// projects</div>
        <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-0.02em' }}>Selected work</h2>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
        {PROJECTS.map((p, i) => {
          const cardStyle = { display: 'flex', flexDirection: 'column', padding: 22, borderRadius: 16, border: '1px solid rgba(148,163,184,0.14)', background: 'rgba(255,255,255,0.025)', minHeight: 188, textDecoration: 'none', color: 'inherit', transition: 'transform .35s ease, box-shadow .35s ease, border-color .35s ease' };
          return (
            <Reveal key={p.name} delay={(i % 4) * 60}>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-card" style={cardStyle}>
                  <ProjectCardContent p={p} />
                </a>
              ) : (
                <div className="project-card" style={{ ...cardStyle, cursor: 'default' }}>
                  <ProjectCardContent p={p} />
                </div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
