import { useEffect, useState } from 'react';
import { StepHead, Panel, StepFoot } from '../components.jsx';
import { CHECKLIST } from '../data/checklist.js';
import { BOOKING_URL, BLOG } from '../config.js';

const KEY = 'pk-checks';
const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; } };

export default function Team() {
  const [done, setDone] = useState(load);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch { /* privater Modus */ } }, [done]);
  const n = CHECKLIST.filter((_, i) => done[i]).length;
  const toggle = (i) => setDone((d) => { const c = [...d]; c[i] = !c[i]; return c; });

  return (
    <>
      <StepHead n={6} title="Passkeys im Team einführen">Eine Checkliste für den Start. Ihr Fortschritt wird nur in diesem Browser gespeichert.</StepHead>
      <div className="grid2">
        <div className="panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
            <h3>Ihr Fortschritt</h3><span className="mono" style={{ color: 'var(--muted)', fontSize: 13 }}>{n} von {CHECKLIST.length}</span>
          </div>
          <div className="meter"><i style={{ width: `${(n / CHECKLIST.length) * 100}%` }} /></div>
          <div className="checks">
            {CHECKLIST.map(([b, t], i) => (
              <label key={b} htmlFor={`chk-${i}`}>
                <input type="checkbox" id={`chk-${i}`} checked={!!done[i]} onChange={() => toggle(i)} />
                <span><b>{b}</b>{t}</span>
              </label>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gap: 16, alignContent: 'start' }}>
          <Panel title="Eine Anmeldung für alle Firmen-Apps">
            <p>Mit einer zentralen Anmeldung (Single Sign-on) wie Pocket ID oder Authentik melden sich Mitarbeitende mit einem Passkey bei Nextcloud, Paperless-ngx, Odoo und weiteren Anwendungen an. Beim Austritt sperren Sie ein Konto – und alle Zugänge sind zu.</p>
          </Panel>
          <Panel title="Weiterlesen im TUXO Blog">
            <div className="links">
              <a href={`${BLOG}/passkeys-statt-passwoerter/`} target="_blank" rel="noopener">Passkeys im KMU</a>
              <a href={`${BLOG}/pocket-id-anmeldung-mit-passkey/`} target="_blank" rel="noopener">Pocket ID</a>
              <a href={`${BLOG}/vaultwarden-passwortmanager/`} target="_blank" rel="noopener">Vaultwarden</a>
            </div>
          </Panel>
        </div>
      </div>
      <div className="cta">
        <div style={{ display: 'grid', gap: 6 }}>
          <h3 style={{ fontSize: 20 }}>Passkeys für Ihr Team einrichten?</h3>
          <p>Im kostenlosen Erstgespräch klären wir in 30 Minuten, wo Sie stehen und welche nächsten Schritte für Sie sinnvoll sind – unverbindlich, per Videocall.</p>
        </div>
        <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener">Termin online buchen →</a>
      </div>
      <StepFoot n={6} />
    </>
  );
}
