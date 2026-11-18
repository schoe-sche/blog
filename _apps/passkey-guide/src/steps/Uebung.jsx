import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StepHead, Panel, StepFoot, SimTag } from '../components.jsx';
import { createPasskey, signIn, supported, shortId, randomId } from '../webauthn.js';

// Scanner: Ring füllt sich, danach zeichnet sich ein Häkchen.
function Scanner({ state }) { // idle | scan | ok
  return (
    <div className={'scanner ' + state}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="52" className="sc-track" />
        <motion.circle cx="60" cy="60" r="52" className="sc-ring" style={{ rotate: -90, transformOrigin: '60px 60px' }}
          initial={false} animate={{ pathLength: state === 'idle' ? 0 : 1 }} transition={{ duration: state === 'scan' ? 1.1 : 0.3, ease: 'easeInOut' }} />
        <AnimatePresence mode="wait">
          {state !== 'ok' ? (
            <motion.g key="fp" exit={{ opacity: 0, scale: 0.6 }} transform="translate(36,36) scale(2)" fill="none" strokeWidth="1.6" strokeLinecap="round" className="sc-fp">
              {['M12 11v3a8 8 0 0 1-1.5 4.7', 'M8.5 8.6A4 4 0 0 1 16 11v1.5', 'M5.6 7A7 7 0 0 1 19 11v2.5', 'M8 11v2a12 12 0 0 1-1.2 5.3', 'M16 15.5a15 15 0 0 1-.8 3.5'].map((d, i) => (
                <motion.path key={d} d={d} animate={state === 'scan' ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.8 }} transition={state === 'scan' ? { duration: 0.9, repeat: Infinity, delay: i * 0.1 } : {}} />
              ))}
            </motion.g>
          ) : (
            <motion.path key="ok" d="M38 62 l15 15 l30 -32" className="sc-check" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.45 }} />
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
}

const SHEET = {
  create: { title: 'Passkey speichern?', text: '«TUXO Übung» möchte einen Passkey für Sie anlegen.', btn: 'Mit Fingerabdruck bestätigen' },
  login: { title: 'Anmelden mit Passkey', text: 'Mit «TUXO Übung» anmelden?', btn: 'Anmelden' },
};

export default function Uebung() {
  const [log, setLog] = useState([{ c: 'in', t: 'Bereit. Wählen Sie «Passkey erstellen» oder die Simulation.' }]);
  const [credId, setCredId] = useState(null);
  const [sim, setSim] = useState(null);
  const [scan, setScan] = useState('idle');
  const add = (...lines) => setLog((l) => [...l, ...lines.map(([t, c = 'in']) => ({ t, c }))]);

  async function create() {
    setSim(null); setLog([]);
    if (!supported()) return add(['Ihr Browser unterstützt keine Passkeys. Nutzen Sie die Simulation.', 'er']);
    add(['→ Die Übungsseite stellt eine zufällige Aufgabe.'], ['→ Ihr Gerät öffnet jetzt seinen Dialog …']);
    try {
      const id = await createPasskey(); setCredId(id);
      add([`✓ Passkey erstellt. Kennung: ${shortId(id)}`, 'ok'], ['Der private Schlüssel ist auf Ihrem Gerät geblieben.']);
    } catch (e) {
      add([`✕ Nicht geklappt (${e.name}).`, 'er'], [e.name === 'NotAllowedError' ? 'Dialog abgebrochen, oder diese Vorschau erlaubt keine echten Passkeys. Probieren Sie die Simulation.' : 'Probieren Sie die Simulation.']);
    }
  }
  async function login() {
    add(['→ Neue Aufgabe für die Anmeldung …']);
    try { await signIn(credId); add(['✓ Angemeldet – ohne Passwort.', 'ok']); } catch (e) { add([`✕ Abgebrochen (${e.name}).`, 'er']); }
  }
  function startSim() { setLog([]); setScan('idle'); setSim('create'); add(['Simulation gestartet.'], ['→ Die Übungsseite stellt eine zufällige Aufgabe.']); }
  function confirm() {
    setScan('scan');
    setTimeout(() => {
      setScan('ok');
      if (sim === 'create') { add([`✓ Passkey erstellt. Kennung: ${shortId(randomId())}`, 'ok'], ['Der private Schlüssel bleibt auf dem Gerät.']); }
      else add(['→ Ihr Gerät unterschreibt die Aufgabe.'], ['✓ Angemeldet – ohne Passwort.', 'ok']);
      setTimeout(() => { setScan('idle'); setSim(sim === 'create' ? 'login' : null); }, 1300);
    }, 1200);
  }

  return (
    <>
      <StepHead n={4} title="Legen Sie Ihren ersten Passkey an">
        Zuerst einen Übungs-Passkey erstellen, dann damit anmelden. Ihr Gerät zeigt dabei seinen eigenen Dialog. Der Übungs-Passkey gilt nur für diese Seite und lässt sich danach in den Einstellungen löschen.
      </StepHead>
      <div className="lab">
        <Panel title="Übung">
          <div className="row"><button className="btn btn-primary" type="button" onClick={create}>1 · Passkey erstellen</button>
            <button className="btn" type="button" disabled={!credId} onClick={login}>2 · Mit Passkey anmelden</button></div>
          <p>Lieber nichts anlegen? Die Simulation zeigt denselben Ablauf.</p>
          <div><button className="btn btn-ghost" type="button" onClick={startSim}>Simulation starten</button></div>
          <AnimatePresence>
            {sim && (
              <motion.div className="sheet" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ type: 'spring', stiffness: 260, damping: 26 }}>
                <SimTag />
                <Scanner state={scan} />
                <b>{SHEET[sim].title}</b>
                <p className="sub">{SHEET[sim].text}</p>
                <button className="btn btn-primary" type="button" disabled={scan !== 'idle'} onClick={confirm}>{SHEET[sim].btn}</button>
              </motion.div>
            )}
          </AnimatePresence>
        </Panel>
        <Panel title="Was gerade passiert" i={4}>
          <div className="log" aria-live="polite">
            <AnimatePresence initial={false}>{log.map((l, i) => (
              <motion.span key={i + l.t} className={l.c} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}>{l.t}</motion.span>
            ))}</AnimatePresence>
          </div>
        </Panel>
      </div>
      <StepFoot n={4} nextLabel="Gerät verloren?" />
    </>
  );
}
