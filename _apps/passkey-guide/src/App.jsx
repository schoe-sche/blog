import { useEffect, useRef, useState } from 'react';
import Logo from './Logo.jsx';
import useHashStep from './useHashStep.js';
import { STEPS } from './data/steps.js';
import { BOOKING_URL } from './config.js';
import Prinzip from './steps/Prinzip.jsx';
import Phishing from './steps/Phishing.jsx';
import Setup from './steps/Setup.jsx';
import Uebung from './steps/Uebung.jsx';
import Notfall from './steps/Notfall.jsx';
import Team from './steps/Team.jsx';

const VIEWS = [Prinzip, Phishing, Setup, Uebung, Notfall, Team];

export default function App() {
  const step = useHashStep();
  const [visited, setVisited] = useState(() => new Set([step]));
  const navRef = useRef(null);

  useEffect(() => {
    setVisited((v) => new Set(v).add(step));
    const nav = navRef.current;
    if (nav && nav.getBoundingClientRect().top < 0) nav.scrollIntoView({ behavior: 'smooth' });
  }, [step]);

  const View = VIEWS[step - 1];

  return (
    <div className="wrap">
      <header className="top">
        <a className="brand" href="https://tuxo.ch" target="_blank" rel="noopener" aria-label="TUXO">
          <Logo />
          <span className="sep" /><span className="lbl">Passkey-Guide</span>
        </a>
        <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener">Erstgespräch</a>
      </header>

      <div className="intro">
        <span className="eyebrow">Interaktiver Lernguide</span>
        <h1>Passkeys verstehen</h1>
        <p>In sechs kurzen Schritten vom Begriff zur ersten eigenen Anmeldung – und zu einem Plan für Ihr Team. Ohne Fachwissen, in etwa zehn Minuten.</p>
      </div>

      <nav className="steps" aria-label="Lernschritte" ref={navRef}>
        {STEPS.map((t, i) => {
          const n = i + 1;
          return (
            <a key={n} href={`#schritt-${n}`} aria-current={n === step ? 'step' : undefined}
               className={visited.has(n) && n !== step ? 'done' : undefined}>
              <span className="n">{String(n).padStart(2, '0')}</span><span className="t">{t}</span>
            </a>
          );
        })}
      </nav>

      <main>
        <section className="step"><View /></section>
      </main>

      <footer>
        <p>Ein Lernguide von TUXO · Alle Beispiele sind fiktiv. Schritt 4 nutzt die WebAuthn-Schnittstelle Ihres Browsers; es werden keine Daten an TUXO übertragen.</p>
        <p><a href="/blog/">Blog</a> · <a href="/#kontakt">Kontakt</a> · <a href="/impressum.html">Impressum</a> · <a href="/datenschutz.html">Datenschutz</a></p>
      </footer>
    </div>
  );
}
