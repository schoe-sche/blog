import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StepHead, StepFoot } from '../components.jsx';
import { SCENARIOS } from '../data/scenarios.js';

export default function Notfall() {
  const [key, setKey] = useState(SCENARIOS[0].key);
  const s = SCENARIOS.find((x) => x.key === key);
  return (
    <>
      <StepHead n={5} title="Und wenn das Gerät weg ist?">Die häufigste Sorge – und gut lösbar, wenn Sie vorher planen. Wählen Sie eine Situation.</StepHead>
      <div className="tabs" role="tablist">
        {SCENARIOS.map((x) => (
          <button key={x.key} role="tab" aria-selected={x.key === key} onClick={() => setKey(x.key)}>
            {x.key === key && <motion.span layoutId="tab" className="tab-bg" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
            <span className="tab-t">{x.label}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={key} className="scen" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
          <div className="panel"><h3>Was passiert</h3><p>{s.what}</p></div>
          <div className="panel"><h3>Was Sie tun</h3>
            <ol className="timeline">{s.todo.map((t, i) => (
              <motion.li key={t} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.09 }}>
                <span className="tl-dot mono">{i + 1}</span><span>{t}</span>
              </motion.li>
            ))}</ol>
          </div>
        </motion.div>
      </AnimatePresence>
      <StepFoot n={5} nextLabel="Passkeys im Team" />
    </>
  );
}
