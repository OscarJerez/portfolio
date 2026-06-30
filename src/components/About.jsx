'use client';
import Reveal from './Reveal';

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
