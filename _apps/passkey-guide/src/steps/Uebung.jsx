import { useState } from 'react';
import { StepHead, Panel, StepFoot, SimTag } from '../components.jsx';
import { createPasskey, signIn, supported, shortId, randomId } from '../webauthn.js';

const Fingerprint = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M12 11v3a8 8 0 0 1-1.5 4.7" /><path d="M8.5 8.6A4 4 0 0 1 16 11v1.5" /><path d="M5.6 7A7 7 0 0 1 19 11v2.5" />
    <path d="M8 11v2a12 12 0 0 1-1.2 5.3" /><path d="M16 15.5a15 15 0 0 1-.8 3.5" />
  </svg>
);

const SHEET = {
  create: { title: 'Passkey speichern?', text: '«TUXO Übung» möchte einen Passkey für Sie anlegen. Bestätigen Sie mit Fingerabdruck, Gesicht oder PIN.', btn: 'Bestätigen' },
  login: { title: 'Anmelden mit Passkey', text: 'Mit «TUXO Übung» anmelden?', btn: 'Anmelden' },
};

export default function Uebung() {
  const [log, setLog] = useState([{ c: 'in', t: 'Bereit. Wählen Sie links «Passkey erstellen» oder «Simulation starten».' }]);
  const [credId, setCredId] = useState(null);
  const [sim, setSim] = useState(null); // null | 'create' | 'login'
  const [scanning, setScanning] = useState(false);
  const add = (...lines) => setLog((l) => [...l, ...lines.map(([t, c = 'in']) => ({ t, c }))]);

  async function create() {
    setSim(null); setLog([]);
    if (!supported()) return add(['Ihr Browser unterstützt keine Passkeys. Nutzen Sie die Simulation.', 'er']);
    add(['→ Die Übungsseite stellt eine zufällige Aufgabe.'], ['→ Ihr Gerät öffnet jetzt seinen Dialog …']);
    try {
      const id = await createPasskey();
      setCredId(id);
      add([`✓ Passkey erstellt. Kennung: ${shortId(id)}`, 'ok'], ['Der private Schlüssel ist auf Ihrem Gerät geblieben. Die Seite kennt nur den öffentlichen Teil.']);
    } catch (e) {
      add([`✕ Nicht geklappt (${e.name}).`, 'er'], [e.name === 'NotAllowedError'
        ? 'Entweder wurde der Dialog abgebrochen, oder diese Vorschau erlaubt keine echten Passkeys. Probieren Sie hier die Simulation.'
        : 'Probieren Sie die Simulation.']);
    }
  }

  async function login() {
    add(['→ Neue Aufgabe für die Anmeldung …']);
    try {
      await signIn(credId);
      add(['✓ Angemeldet – ohne Passwort.', 'ok'], ['In einer echten Anwendung prüft der Server jetzt die Unterschrift mit dem öffentlichen Schlüssel.']);
    } catch (e) { add([`✕ Anmeldung abgebrochen (${e.name}).`, 'er']); }
  }

  function startSim() {
    setLog([]); setSim('create');
    add(['Simulation gestartet.'], ['→ Die Übungsseite stellt eine zufällige Aufgabe.'], ['→ Ihr Gerät fragt, ob es einen Passkey anlegen soll.']);
  }

  function confirmSim() {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      if (sim === 'create') {
        add([`✓ Passkey erstellt. Kennung: ${shortId(randomId())}`, 'ok'], ['Der private Schlüssel bleibt auf dem Gerät, die Seite erhält den öffentlichen.']);
        setSim('login');
      } else {
        add(['→ Neue Aufgabe, Ihr Gerät unterschreibt sie.'], ['✓ Angemeldet – ohne Passwort.', 'ok']);
        setSim(null);
      }
    }, 1100);
  }

  return (
    <>
      <StepHead n={4} title="Legen Sie Ihren ersten Passkey an">
        Zwei Klicks: zuerst einen Übungs-Passkey erstellen, dann damit anmelden. Ihr Gerät zeigt dabei seinen eigenen Dialog. Der Übungs-Passkey gilt nur für diese Seite; Sie können ihn danach in den Einstellungen Ihres Geräts oder Passwortmanagers löschen.
      </StepHead>
      <div className="lab">
        <Panel title="Übung">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <button className="btn btn-primary" type="button" onClick={create}>1 · Passkey erstellen</button>
            <button className="btn" type="button" disabled={!credId} onClick={login}>2 · Mit Passkey anmelden</button>
          </div>
          <p>Klappt es auf Ihrem Gerät nicht, oder möchten Sie nichts anlegen, zeigt Ihnen die Simulation denselben Ablauf.</p>
          <div><button className="btn btn-ghost" type="button" onClick={startSim}>Simulation starten</button></div>
          {sim && (
            <div className={'sheet' + (scanning ? ' scan' : '')}>
              <SimTag />
              <div className="fp" aria-hidden="true"><Fingerprint /></div>
              <b>{SHEET[sim].title}</b>
              <p style={{ color: 'var(--muted)', fontSize: 14 }}>{SHEET[sim].text}</p>
              <button className="btn btn-primary" type="button" disabled={scanning} onClick={confirmSim}>{SHEET[sim].btn}</button>
            </div>
          )}
        </Panel>
        <Panel title="Was gerade passiert">
          <div className="log" aria-live="polite">{log.map((l, i) => <span key={i} className={l.c}>{l.t}</span>)}</div>
        </Panel>
      </div>
      <StepFoot n={4} nextLabel="Gerät verloren?" />
    </>
  );
}
