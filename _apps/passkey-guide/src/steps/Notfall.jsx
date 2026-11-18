import { useState } from 'react';
import { StepHead, Panel, StepFoot } from '../components.jsx';
import { SCENARIOS } from '../data/scenarios.js';

export default function Notfall() {
  const [key, setKey] = useState(SCENARIOS[0].key);
  const s = SCENARIOS.find((x) => x.key === key);
  return (
    <>
      <StepHead n={5} title="Und wenn das Gerät weg ist?">Die häufigste Sorge – und gut lösbar, wenn Sie vorher planen. Wählen Sie eine Situation.</StepHead>
      <div className="tabs" role="tablist">
        {SCENARIOS.map((x) => (
          <button key={x.key} role="tab" aria-selected={x.key === key} onClick={() => setKey(x.key)}>{x.label}</button>
        ))}
      </div>
      <div className="grid2">
        <Panel title="Was passiert"><p>{s.what}</p></Panel>
        <Panel title="Was Sie tun"><ol className="do">{s.todo.map((t) => <li key={t}>{t}</li>)}</ol></Panel>
      </div>
      <StepFoot n={5} nextLabel="Passkeys im Team" />
    </>
  );
}
