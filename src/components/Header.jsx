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
