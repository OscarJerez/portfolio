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
