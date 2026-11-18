import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StepHead, Panel, StepFoot, SimTag } from '../components.jsx';

const REAL = 'beispielbank.example';
const SITES = [
  { url: 'beispielbank-login.example', why: 'Die Adresse enthält zwar «beispielbank», gehört aber jemand anderem.' },
  { url: 'beispielbank.example', why: 'Genau die Adresse, für die Ihr Passkey angelegt wurde.' },
  { url: 'beispiel-bank.example', why: 'Ein einziger Bindestrich – für Menschen kaum sichtbar, für Ihr Gerät eine andere Adresse.' },
];

// Vergleicht Zeichen für Zeichen und markiert die erste Abweichung.
function firstDiff(a, b) {
  for (let i = 0; i < Math.max(a.length, b.length); i++) if (a[i] !== b[i]) return i;
  return -1;
}

function AddressCheck({ url }) {
  const diff = firstDiff(url, REAL);
  const ok = diff === -1;
  const [done, setDone] = useState(false);
  useEffect(() => { setDone(false); const t = setTimeout(() => setDone(true), Math.min(url.length, ok ? 99 : diff + 1) * 45 + 300); return () => clearTimeout(t); }, [url, ok, diff]);
  return (
    <div className="addr">
      <div className="addr-row"><span className="addr-k">Gespeichert für</span><span className="addr-v mono">{REAL}</span></div>
      <div className="addr-row"><span className="addr-k">Diese Seite</span>
        <span className="addr-v mono">
          {url.split('').map((c, i) => (
            <motion.span key={url + i} initial={{ opacity: 0.25 }}
              animate={!ok && i === diff ? { opacity: 1, y: [0, -4, 0, -2, 0] } : { opacity: 1 }}
              transition={{ delay: i * 0.045, duration: !ok && i === diff ? 0.5 : 0.15 }}
              className={!ok && i === diff ? 'bad-ch' : (ok || i < diff ? 'ok-ch' : '')}>{c}</motion.span>
          ))}
        </span>
      </div>
      <AnimatePresence>
        {done && (
          <motion.div className={'verdict ' + (ok ? 'ok' : 'block')} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <motion.span className="v-icon" initial={{ rotate: ok ? -90 : 0, x: ok ? 0 : -6 }} animate={{ rotate: 0, x: ok ? 0 : [ -6, 6, -4, 4, 0] }} transition={{ duration: 0.45 }}>{ok ? '🔑' : '⛔'}</motion.span>
            <span><b>{ok ? 'Passkey passt – angemeldet.' : 'Kein Passkey für diese Adresse.'}</b> {SITES.find((s) => s.url === url).why}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Phishing() {
  const [pick, setPick] = useState(null);
  const [pwPick, setPwPick] = useState(false);
  return (
    <>
      <StepHead n={2} title="Warum Phishing bei Passkeys ins Leere läuft">
        Drei Seiten, die gleich aussehen – nur eine ist echt. Ihr Gerät vergleicht die Adresse Zeichen für Zeichen, bevor es einen Passkey anbietet. Wählen Sie eine Seite.
      </StepHead>
      <div><SimTag>Simulation · fiktive Bank</SimTag></div>
      <div className="browsers">
        {SITES.map((s, i) => (
          <motion.button type="button" key={s.url} className={'bw' + (pick === s.url ? ' sel' : '')} onClick={() => { setPick(s.url); setPwPick(false); }}
            whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.08 }}>
            <div className="bar"><span className="dots"><i /><i /><i /></span><span className="url">🔒 {s.url}</span></div>
            <div className="body"><span className="bank">Beispielbank · E-Banking</span><span className="sub">Mit Passkey anmelden →</span></div>
          </motion.button>
        ))}
      </div>
      <Panel title={pick ? 'Ihr Gerät prüft die Adresse' : 'Wählen Sie oben eine Seite'} i={4}>
        {pick ? <AddressCheck url={pick} /> : <p>Die Prüfung läuft automatisch – Sie müssen nichts erkennen.</p>}
        {pick && pick !== REAL && (
          <div className="pwline">
            <button type="button" className="btn btn-ghost" onClick={() => setPwPick(true)}>Und mit Passwort?</button>
            <AnimatePresence>{pwPick && (
              <motion.span initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="pw-bad">Das Formular nimmt alles an – Ihr Passwort wäre jetzt bei Betrügern.</motion.span>
            )}</AnimatePresence>
          </div>
        )}
      </Panel>
      <StepFoot n={2} nextLabel="Ihr Setup" />
    </>
  );
}
