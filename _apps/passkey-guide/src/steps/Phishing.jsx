import { useState } from 'react';
import { StepHead, StepFoot, SimTag } from '../components.jsx';

const SITES = [
  { url: 'beispielbank-login.example', real: false, why: 'Die Adresse enthält zwar «beispielbank», gehört aber jemand anderem.' },
  { url: 'beispielbank.example', real: true, why: 'Das ist die Adresse, für die Ihr Passkey angelegt wurde.' },
  { url: 'beispiel-bank.example', real: false, why: 'Ein einziger Bindestrich – für Menschen kaum sichtbar, für Ihr Gerät eine andere Adresse.' },
];

function result(site, method) {
  if (site.real) return { ok: true, head: 'Angemeldet.', text: method === 'pk' ? site.why : 'Hier war es die echte Seite.' };
  return method === 'pk'
    ? { ok: false, head: 'Kein Passkey verfügbar.', text: 'Ihr Gerät bietet für diese Adresse nichts an. ' + site.why }
    : { ok: false, head: 'Passwort übermittelt – an Betrüger.', text: 'Das Formular nimmt alles an. ' + site.why };
}

function FakeBrowser({ site }) {
  const [method, setMethod] = useState(null);
  const r = method && result(site, method);
  return (
    <div className="bw">
      <div className="bar"><span className="dots"><i /><i /><i /></span><span className="url">🔒 {site.url}</span></div>
      <div className="body">
        <span className="bank">Beispielbank · E-Banking</span>
        <span style={{ color: 'var(--muted)', fontSize: 14 }}>Melden Sie sich an, um fortzufahren.</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <button className="btn btn-primary" type="button" onClick={() => setMethod('pk')}>Mit Passkey</button>
          <button className="btn" type="button" onClick={() => setMethod('pw')}>Mit Passwort</button>
        </div>
        {r && <div className={'res ' + (r.ok ? 'ok' : 'block')}><b>{r.head}</b> {r.text}</div>}
      </div>
    </div>
  );
}

export default function Phishing() {
  return (
    <>
      <StepHead n={2} title="Warum Phishing bei Passkeys ins Leere läuft">
        Jeder Passkey ist fest an die Adresse des Dienstes gebunden. Ihr Gerät prüft diese Adresse selbst – auch dann, wenn eine Fälschung täuschend echt aussieht. Probieren Sie es aus: Drei Seiten sehen gleich aus, nur eine ist echt.
      </StepHead>
      <div><SimTag>Simulation · fiktive Bank</SimTag></div>
      <div className="browsers">{SITES.map((s) => <FakeBrowser key={s.url} site={s} />)}</div>
      <p className="lead" style={{ color: 'var(--muted)' }}>Beim Passwort hängt alles davon ab, dass Sie die falsche Adresse bemerken. Beim Passkey übernimmt das Ihr Gerät.</p>
      <StepFoot n={2} nextLabel="Ihr Setup" />
    </>
  );
}
