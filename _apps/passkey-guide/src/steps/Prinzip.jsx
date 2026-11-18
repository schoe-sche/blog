import { motion } from 'framer-motion';
import { StepHead, Panel, StepFoot, fadeUp } from '../components.jsx';
import Handshake, { STAGES, useLoop } from '../Handshake.jsx';

const RISKS = [
  ['Erraten oder durchprobieren', 'möglich', 'nicht möglich'],
  ['Für mehrere Dienste wiederverwenden', 'häufig', 'je Dienst eigener Schlüssel'],
  ['Auf gefälschter Seite eingeben', 'möglich', 'funktioniert dort nicht'],
  ['Diebstahl beim Dienst', 'Passwort betroffen', 'nur öffentlicher Teil'],
];

export default function Prinzip() {
  const [stage, setStage] = useLoop(false);
  return (
    <>
      <StepHead n={1} title="Ein Schlüsselpaar statt eines Passworts">
        Ein Passkey besteht aus zwei zusammengehörigen Teilen nach dem offenen Standard FIDO2/WebAuthn. Der private Teil bleibt auf Ihrem Gerät, der öffentliche liegt beim Dienst. Gehen Sie die Anmeldung Schritt für Schritt durch.
      </StepHead>
      <Panel className="scene-panel">
        <Handshake stage={stage} compact />
        <div className="scrub">
          {STAGES.slice(1).map((s, i) => (
            <button key={s} type="button" className={stage === i + 1 ? 'on' : stage > i + 1 ? 'past' : ''} onClick={() => setStage(i + 1)}>
              <span className="mono">{i + 1}</span>{s}
            </button>
          ))}
        </div>
      </Panel>
      <Panel title="Was sich gegenüber dem Passwort ändert" i={4}>
        <div className="tbl"><table>
          <thead><tr><th>Risiko</th><th>Passwort</th><th>Passkey</th></tr></thead>
          <motion.tbody initial="hidden" animate="show">
            {RISKS.map(([r, pw, pk], i) => (
              <motion.tr key={r} variants={fadeUp} custom={i + 5}><td>{r}</td><td className="yes">✕ {pw}</td><td className="no">✓ {pk}</td></motion.tr>
            ))}
          </motion.tbody>
        </table></div>
      </Panel>
      <StepFoot n={1} nextLabel="Schutz vor Phishing" />
    </>
  );
}
