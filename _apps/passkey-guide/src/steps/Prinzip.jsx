import { useEffect, useState } from 'react';
import { StepHead, Panel, StepFoot } from '../components.jsx';

const FLOW = [
  ['Der Dienst stellt eine Aufgabe', 'Eine zufällige Zeichenfolge, die nur für diese eine Anmeldung gilt.'],
  ['Ihr Gerät fragt nach Ihnen', 'Fingerabdruck, Gesicht oder PIN – das bleibt auf dem Gerät.'],
  ['Das Gerät unterschreibt', 'Mit dem privaten Schlüssel, der das Gerät dabei nicht verlässt.'],
  ['Der Dienst prüft', 'Mit dem öffentlichen Schlüssel. Passt die Unterschrift, sind Sie angemeldet.'],
];

const RISKS = [
  ['Erraten oder durchprobieren', 'möglich', 'nicht möglich'],
  ['Für mehrere Dienste wiederverwenden', 'häufig', 'je Dienst eigener Schlüssel'],
  ['Auf gefälschter Seite eingeben', 'möglich', 'funktioniert dort nicht'],
  ['Diebstahl beim Dienst', 'Passwort betroffen', 'nur öffentlicher Teil'],
];

export default function Prinzip() {
  // Wie viele Stationen des Ablaufs sind hervorgehoben? Zu Beginn alle.
  const [lit, setLit] = useState(FLOW.length);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    if (lit >= FLOW.length) { setPlaying(false); return; }
    const t = setTimeout(() => setLit((l) => l + 1), 900);
    return () => clearTimeout(t);
  }, [playing, lit]);

  return (
    <>
      <StepHead n={1} title="Ein Schlüsselpaar statt eines Passworts">
        Ein Passkey ist ein digitaler Schlüssel nach dem offenen Standard FIDO2/WebAuthn. Statt eines Geheimnisses, das Sie und der Dienst kennen, gibt es zwei zusammengehörige Teile.
      </StepHead>

      <div className="keys">
        <div className="keybox dev"><span className="who">Auf Ihrem Gerät</span><strong>Privater Schlüssel</strong>
          <p>Bleibt bei Ihnen – auf dem Handy, im Computer, im Passwortmanager oder auf einem Sicherheitsschlüssel. Sie entsperren ihn mit Fingerabdruck, Gesicht oder PIN.</p></div>
        <div className="arrow">gehören<br />zusammen</div>
        <div className="keybox srv"><span className="who">Beim Dienst</span><strong>Öffentlicher Schlüssel</strong>
          <p>Liegt beim Online-Dienst. Er kann damit nur prüfen, ob eine Unterschrift echt ist. Wird er gestohlen, kann niemand damit anmelden.</p></div>
      </div>

      <div className="grid2">
        <Panel title="So läuft eine Anmeldung ab">
          <ol className="flow">
            {FLOW.map(([b, t], i) => (
              <li key={b} className={i < lit ? 'on' : undefined}><span><b>{b}</b>{t}</span></li>
            ))}
          </ol>
          <div><button className="btn" type="button" onClick={() => { setLit(0); setPlaying(true); }}>▶ Anmeldung abspielen</button></div>
        </Panel>
        <Panel title="Was sich gegenüber dem Passwort ändert">
          <div className="tbl"><table>
            <thead><tr><th>Risiko</th><th>Passwort</th><th>Passkey</th></tr></thead>
            <tbody>{RISKS.map(([r, pw, pk]) => (
              <tr key={r}><td>{r}</td><td className="yes">{pw}</td><td className="no">{pk}</td></tr>
            ))}</tbody>
          </table></div>
        </Panel>
      </div>
      <StepFoot n={1} nextLabel="Schutz vor Phishing" />
    </>
  );
}
