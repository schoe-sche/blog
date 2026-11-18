import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

// Animierte Szene: Gerät und Dienst tauschen Aufgabe und Unterschrift aus.
// stage 0 = Ruhe, 1 = Aufgabe unterwegs, 2 = Gerät prüft Sie, 3 = Unterschrift unterwegs, 4 = angemeldet
export const STAGES = [
  'Bereit',
  'Der Dienst schickt eine einmalige Aufgabe',
  'Ihr Gerät prüft: Sind Sie es?',
  'Das Gerät unterschreibt – der Schlüssel bleibt da',
  'Unterschrift geprüft: angemeldet',
];

export function useLoop(active, steps = 5, ms = 1500) {
  const [stage, setStage] = useState(active ? 1 : 4);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setStage((s) => (s + 1) % steps), stage === 4 ? 2200 : stage === 0 ? 500 : ms);
    return () => clearTimeout(t);
  }, [stage, active, steps, ms]);
  return [stage, setStage];
}

const Phone = () => (
  <g>
    <rect x="-34" y="-58" width="68" height="116" rx="14" className="hs-dev" />
    <rect x="-12" y="-50" width="24" height="5" rx="2.5" className="hs-dim" />
  </g>
);

const Server = () => (
  <g>
    {[-40, -6, 28].map((y) => (
      <g key={y}>
        <rect x="-44" y={y} width="88" height="28" rx="8" className="hs-srv" />
        <circle cx="-30" cy={y + 14} r="3.5" className="hs-led" />
        <rect x="-18" y={y + 11} width="46" height="6" rx="3" className="hs-dim" />
      </g>
    ))}
  </g>
);

const FingerprintPath = ({ draw }) => (
  <g transform="translate(-15,-15) scale(1.25)" fill="none" strokeWidth="1.8" strokeLinecap="round" className="hs-fp">
    {['M12 11v3a8 8 0 0 1-1.5 4.7', 'M8.5 8.6A4 4 0 0 1 16 11v1.5', 'M5.6 7A7 7 0 0 1 19 11v2.5', 'M8 11v2a12 12 0 0 1-1.2 5.3', 'M16 15.5a15 15 0 0 1-.8 3.5'].map((d, i) => (
      <motion.path key={d} d={d} initial={false} animate={{ pathLength: draw ? 1 : 0.15, opacity: draw ? 1 : 0.35 }} transition={{ duration: 0.6, delay: i * 0.08 }} />
    ))}
  </g>
);

export default function Handshake({ stage, compact = false }) {
  const reduce = useReducedMotion();
  const DX = 110, SX = 490; // x-Positionen Gerät / Dienst
  const travel = (from, to) => (reduce ? { x: to } : { x: [from, to] });

  return (
    <div className={'handshake' + (compact ? ' compact' : '')}>
      <svg viewBox="0 0 600 220" role="img" aria-label={STAGES[stage]}>
        {/* Verbindungslinie */}
        <line x1={DX + 50} y1="110" x2={SX - 60} y2="110" className="hs-line" />
        <motion.line x1={DX + 50} y1="110" x2={SX - 60} y2="110" className="hs-line-on"
          initial={false} animate={{ pathLength: stage >= 1 ? 1 : 0 }} transition={{ duration: 0.8 }} />

        {/* Gerät */}
        <g transform={`translate(${DX},110)`}>
          <Phone />
          <motion.circle r="26" className="hs-ring" initial={false}
            animate={stage === 2 && !reduce ? { scale: [1, 1.25, 1], opacity: [0.9, 0.2, 0.9] } : { scale: 1, opacity: stage >= 2 ? 0.9 : 0.25 }}
            transition={stage === 2 ? { duration: 1.1, repeat: Infinity } : { duration: 0.3 }} />
          <FingerprintPath draw={stage >= 2} />
          <text y="88" className="hs-label">Ihr Gerät</text>
          {/* Privater Schlüssel bleibt immer hier */}
          <g transform="translate(46,-52)">
            <rect x="-4" y="-12" width="70" height="24" rx="12" className="hs-chip-g" />
            <text x="31" y="4" className="hs-chip-t">🔑 privat</text>
          </g>
        </g>

        {/* Dienst */}
        <g transform={`translate(${SX},110)`}>
          <Server />
          <text y="88" className="hs-label">Online-Dienst</text>
          <g transform="translate(-112,-60)">
            <rect x="-4" y="-12" width="82" height="24" rx="12" className="hs-chip-b" />
            <text x="37" y="4" className="hs-chip-t">🔓 öffentlich</text>
          </g>
          <AnimatePresence>
            {stage === 4 && (
              <motion.g key="ok" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}>
                <circle cx="52" cy="-52" r="18" className="hs-ok" />
                <motion.path d="M44 -52 l6 6 l11 -12" className="hs-ok-check" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.15, duration: 0.35 }} />
              </motion.g>
            )}
          </AnimatePresence>
        </g>

        {/* Pakete auf der Leitung */}
        <AnimatePresence>
          {stage === 1 && (
            <motion.g key="challenge" initial={{ x: SX - 70, opacity: 0 }} animate={{ ...travel(SX - 70, DX + 60), opacity: [0, 1, 1, 0] }}
              exit={{ opacity: 0 }} transition={{ duration: 1.3, ease: 'easeInOut' }}>
              <rect x="-38" y="96" width="76" height="28" rx="8" className="hs-pkt-b" />
              <text y="115" className="hs-pkt-t">a7f3·91c</text>
            </motion.g>
          )}
          {stage === 3 && (
            <motion.g key="sig" initial={{ x: DX + 60, opacity: 0 }} animate={{ ...travel(DX + 60, SX - 70), opacity: [0, 1, 1, 0] }}
              exit={{ opacity: 0 }} transition={{ duration: 1.3, ease: 'easeInOut' }}>
              <rect x="-46" y="96" width="92" height="28" rx="8" className="hs-pkt-g" />
              <text y="115" className="hs-pkt-t">✍ Signatur</text>
            </motion.g>
          )}
        </AnimatePresence>
      </svg>
      <div className="hs-caption" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.span key={stage} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}>
            <b className="mono">{stage > 0 ? `${stage}/4` : '–'}</b> {STAGES[stage]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
