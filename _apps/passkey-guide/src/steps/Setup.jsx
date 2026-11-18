import { useState } from 'react';
import { StepHead, Panel, StepFoot } from '../components.jsx';

// Empfehlung aus den Antworten ableiten – reine Funktion, leicht testbar.
export function recommend({ who, devices, pm, crit }) {
  const mixed = devices.length > 1;
  const out = [];
  if (who === 'team' || mixed || pm === 'yes') {
    out.push({
      h: 'Passwortmanager mit Passkey-Unterstützung',
      p: (mixed ? 'Sie arbeiten mit Geräten verschiedener Hersteller. ' : '')
        + 'Ein Passwortmanager wie Bitwarden speichert Passwörter und Passkeys an einem Ort und gleicht sie über alle Geräte ab'
        + (who === 'team' ? ' – mit geteilten Tresoren fürs Team.' : '.')
        + ' Auf Wunsch betreiben Sie ihn mit Vaultwarden selbst, in der Schweiz.',
    });
  } else {
    const name = { apple: 'Apple Passwörter (iCloud-Schlüsselbund)', android: 'den Google Passwortmanager', windows: 'Windows Hello' }[devices[0]]
      ?? 'der eingebaute Speicher Ihres Geräts';
    out.push({ h: 'Der eingebaute Schlüsselbund Ihres Geräts', p: `Für den Einstieg reicht ${name}. Das ist bereits vorhanden und einfach zu bedienen. Wechseln Sie später die Plattform, ist ein Passwortmanager flexibler.` });
  }
  if (crit === 'yes') out.push({ extra: true, h: 'Zwei Sicherheitsschlüssel für heikle Konten', p: 'Für E-Banking und Admin-Zugänge empfiehlt sich zusätzlich ein Hardware-Sicherheitsschlüssel (FIDO2) – am besten zwei: einer im Alltag, einer sicher verwahrt als Reserve.' });
  if (who === 'team') out.push({ extra: true, h: 'Zentrale Anmeldung für Firmen-Apps', p: 'Mit Pocket ID oder Authentik brauchen Mitarbeitende nur einen Passkey für alle internen Anwendungen. Ein- und Austritte verwalten Sie an einer Stelle.' });
  out.push({ extra: true, h: 'Immer einen zweiten Weg hinterlegen', p: 'Richten Sie pro wichtigem Konto mindestens zwei Anmeldemöglichkeiten ein und bewahren Sie Wiederherstellungscodes sicher auf.' });
  return out;
}

function Choice({ type = 'radio', name, value, checked, onChange, children }) {
  return (
    <label className="choice">
      <input type={type} name={name} id={`${name}-${value}`} value={value} checked={checked} onChange={onChange} />
      <span>{children}</span>
    </label>
  );
}

export default function Setup() {
  const [a, setA] = useState({ who: 'me', devices: ['apple', 'windows'], pm: 'no', crit: 'yes' });
  const set = (k) => (e) => setA({ ...a, [k]: e.target.value });
  const toggleDev = (e) => {
    const v = e.target.value;
    setA({ ...a, devices: e.target.checked ? [...a.devices, v] : a.devices.filter((d) => d !== v) });
  };
  const radio = (k, v, label) => <Choice name={k} value={v} checked={a[k] === v} onChange={set(k)}>{label}</Choice>;

  return (
    <>
      <StepHead n={3} title="Wo sollen Ihre Passkeys liegen?">Vier kurze Fragen – danach sehen Sie, welche Aufbewahrung zu Ihnen passt.</StepHead>
      <div className="grid2">
        <form className="panel" style={{ gap: 18 }} onSubmit={(e) => e.preventDefault()}>
          <fieldset><legend>Wer soll Passkeys nutzen?</legend><div className="choices">{radio('who', 'me', 'Nur ich')}{radio('who', 'team', 'Unser Team')}</div></fieldset>
          <fieldset><legend>Welche Geräte verwenden Sie?</legend><div className="choices">
            {[['apple', 'iPhone / Mac'], ['android', 'Android'], ['windows', 'Windows']].map(([v, l]) => (
              <Choice key={v} type="checkbox" name="dev" value={v} checked={a.devices.includes(v)} onChange={toggleDev}>{l}</Choice>
            ))}
          </div></fieldset>
          <fieldset><legend>Nutzen Sie schon einen Passwortmanager?</legend><div className="choices">{radio('pm', 'yes', 'Ja')}{radio('pm', 'no', 'Nein')}</div></fieldset>
          <fieldset><legend>Gibt es besonders heikle Konten (E-Banking, Admin-Zugänge)?</legend><div className="choices">{radio('crit', 'yes', 'Ja')}{radio('crit', 'no', 'Nein')}</div></fieldset>
        </form>
        <Panel title="Unsere Empfehlung für Sie">
          <div className="reco">{recommend(a).map((o) => (
            <div key={o.h} className={'card' + (o.extra ? ' extra' : '')}><h3>{o.h}</h3><p>{o.p}</p></div>
          ))}</div>
        </Panel>
      </div>
      <StepFoot n={3} nextLabel="Selbst ausprobieren" />
    </>
  );
}
