'use client';
import { useState } from 'react';
import Reveal from './Reveal';

const CVS = [
  {
    lang: 'Svenska',
    label: 'SV',
    file: '/portfolio/cv/Oscar-Jerez-CV-SV.pdf',
    download: '/portfolio/cv/Oscar-Jerez-CV-SV.pdf',
  },
  {
    lang: 'English',
    label: 'EN',
    file: '/portfolio/cv/Oscar-Jerez-CV-EN.pdf',
    download: '/portfolio/cv/Oscar-Jerez-CV-EN.pdf',
  },
];

export default function CV() {
  const [open, setOpen] = useState(null); // null | 'sv' | 'en'

  const active = CVS.find((c) => c.label.toLowerCase() === open);

  return (
    <>
      <section
        id="cv"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1120,
          margin: '0 auto',
          padding: '60px 28px 80px',
        }}
      >
        <Reveal style={{ marginBottom: 44 }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 13,
              color: '#22d3ee',
              marginBottom: 10,
            }}
          >
            // curriculum vitae
          </div>
          <h2
            style={{
              fontFamily: "'Sora',sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(28px,4vw,40px)',
              letterSpacing: '-0.02em',
              marginBottom: 16,
            }}
          >
            CV
          </h2>
          <p style={{ fontSize: 16, color: '#94a3b8', maxWidth: 520, marginBottom: 36 }}>
            Available in Swedish and English. View directly or download.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {CVS.map((cv) => (
              <div
                key={cv.label}
                style={{
                  padding: 28,
                  borderRadius: 16,
                  border: '1px solid rgba(148,163,184,0.14)',
                  background: 'rgba(255,255,255,0.025)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                  minWidth: 220,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: 'rgba(34,211,238,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Sora',sans-serif",
                        fontWeight: 600,
                        fontSize: 16,
                        color: '#e2e8f0',
                      }}
                    >
                      CV — {cv.lang}
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: 11,
                        color: '#64748b',
                        marginTop: 2,
                      }}
                    >
                      Oscar Jerez Arias · PDF
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 10 }}>
                  <button
                    onClick={() => setOpen(cv.label.toLowerCase())}
                    style={{
                      flex: 1,
                      padding: '10px 16px',
                      borderRadius: 10,
                      background: 'linear-gradient(135deg,#22d3ee,#38bdf8)',
                      color: '#0f172a',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: "'Sora',sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    View
                  </button>
                  <a
                    href={cv.download}
                    download
                    style={{
                      flex: 1,
                      padding: '10px 16px',
                      borderRadius: 10,
                      border: '1px solid rgba(148,163,184,0.25)',
                      color: '#e2e8f0',
                      background: 'rgba(255,255,255,0.02)',
                      cursor: 'pointer',
                      fontFamily: "'Sora',sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      textDecoration: 'none',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* MODAL */}
      {open && active && (
        <div
          onClick={() => setOpen(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: 860,
              height: '90vh',
              borderRadius: 20,
              overflow: 'hidden',
              border: '1px solid rgba(148,163,184,0.16)',
              background: '#0f172a',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.8)',
            }}
          >
            {/* Modal header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 20px',
                borderBottom: '1px solid rgba(148,163,184,0.12)',
                background: 'rgba(15,23,42,0.8)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: 13,
                    color: '#22d3ee',
                  }}
                >
                  Oscar-Jerez-CV-{active.label}.pdf
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <a
                  href={active.download}
                  download
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#22d3ee',
                    textDecoration: 'none',
                    padding: '6px 12px',
                    borderRadius: 8,
                    border: '1px solid rgba(34,211,238,0.3)',
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download
                </a>
                <button
                  onClick={() => setOpen(null)}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(148,163,184,0.16)',
                    borderRadius: 8,
                    color: '#94a3b8',
                    cursor: 'pointer',
                    fontSize: 18,
                    width: 32,
                    height: 32,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: 1,
                  }}
                >
                  ×
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <iframe
              src={active.file}
              style={{ flex: 1, width: '100%', border: 'none', background: '#fff' }}
              title={`CV — ${active.lang}`}
            />
          </div>
        </div>
      )}
    </>
  );
}
