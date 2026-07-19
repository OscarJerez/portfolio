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
      '        new(".NET",  "C#"),',
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
