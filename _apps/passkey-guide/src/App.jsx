import { useEffect, useRef, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import Logo from './Logo.jsx';
import useHashStep from './useHashStep.js';
import { STEPS } from './data/steps.js';
import { BOOKING_URL } from './config.js';
import Handshake, { useLoop } from './Handshake.jsx';
import Prinzip from './steps/Prinzip.jsx';
import Phishing from './steps/Phishing.jsx';
import Setup from './steps/Setup.jsx';
import Uebung from './steps/Uebung.jsx';
import Notfall from './steps/Notfall.jsx';
import Team from './steps/Team.jsx';

const VIEWS = [Prinzip, Phishing, Setup, Uebung, Notfall, Team];

function Hero() {
  const [stage] = useLoop(true);
  return (
    <section className="hero">
      <motion.div className="hero-text" initial="hidden" animate="show"
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
        {[
          <span key="e" className="eyebrow">Interaktiver Lernguide</span>,
          <h1 key="h">Anmelden ohne Passwort.<br /><span className="grad">Verstehen in zehn Minuten.</span></h1>,
          <p key="p">Sechs kurze Schritte: wie Passkeys funktionieren, warum Phishing daran scheitert – und wie Sie sie in Ihrem Team einführen.</p>,
          <div key="b" className="hero-cta"><a className="btn btn-primary btn-lg" href="#schritt-1" onClick={() => document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' })}>Guide starten →</a><span className="hint">Kein Konto, keine Daten an uns</span></div>,
        ].map((el, i) => <motion.div key={i} variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.7, 0.3, 1] } } }}>{el}</motion.div>)}
      </motion.div>
      <motion.div className="hero-scene" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <Handshake stage={stage} />
      </motion.div>
    </section>
  );
}

function Stepper({ step, visited }) {
  return (
    <nav className="stepper" aria-label="Lernschritte">
      <div className="track"><motion.i animate={{ width: `${((step - 1) / 5) * 100}%` }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} /></div>
      <ol>
        {STEPS.map((t, i) => {
          const n = i + 1, on = n === step;
          return (
            <li key={n}>
              <a href={`#schritt-${n}`} aria-current={on ? 'step' : undefined} className={visited.has(n) && !on ? 'done' : undefined}>
                {on && <motion.span layoutId="pill" className="pill-bg" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                <span className="dot">{visited.has(n) && !on ? '✓' : n}</span>
                <span className="t">{t}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default function App() {
  const step = useHashStep();
  const prev = useRef(step);
  const dir = step >= prev.current ? 1 : -1;
  useEffect(() => { prev.current = step; }, [step]);
  const [visited, setVisited] = useState(() => new Set([step]));
  useEffect(() => { setVisited((v) => new Set(v).add(step)); }, [step]);
  useEffect(() => {
    const g = document.getElementById('guide');
    if (window.location.hash && g && g.getBoundingClientRect().top < -40) g.scrollIntoView({ behavior: 'smooth' });
  }, [step]);

  const View = VIEWS[step - 1];

  return (
    <MotionConfig reducedMotion="user">
      <div className="bgfx" aria-hidden="true"><span className="orb a" /><span className="orb b" /><span className="grid" /></div>
      <div className="wrap">
        <header className="top">
          <a className="brand" href="https://tuxo.ch" target="_blank" rel="noopener" aria-label="TUXO">
            <Logo /><span className="sep" /><span className="lbl">Passkey-Guide</span>
          </a>
          <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener">Erstgespräch</a>
        </header>

        <Hero />

        <div id="guide" className="guide">
          <Stepper step={step} visited={visited} />
          <main>
            {/* Neuer Schritt gleitet aus der Laufrichtung herein (vorwärts von rechts, zurück von links) */}
            <motion.section key={step} className="step"
              initial={{ opacity: 0, x: 36 * dir }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 0.7, 0.3, 1] }}>
              <View />
            </motion.section>
          </main>
        </div>

        <footer>
          <p>Ein Lernguide von TUXO · Alle Beispiele sind fiktiv. Schritt 4 nutzt die WebAuthn-Schnittstelle Ihres Browsers; es werden keine Daten an TUXO übertragen.</p>
          <p><a href="/blog/">Blog</a> · <a href="/#kontakt">Kontakt</a> · <a href="/impressum.html">Impressum</a> · <a href="/datenschutz.html">Datenschutz</a></p>
        </footer>
      </div>
    </MotionConfig>
  );
}
