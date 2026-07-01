import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stack from '@/components/Stack';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import CV from '@/components/CV';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#0f172a', backgroundImage: 'radial-gradient(900px 500px at 80% -5%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(700px 500px at 0% 30%, rgba(34,211,238,0.08), transparent 55%)' }}>
      <ParticleBackground accent="#22d3ee" count={120} />
      <Header />
      <Hero />
      <Stack />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <CV />
      <Footer />
    </div>
  );
}
