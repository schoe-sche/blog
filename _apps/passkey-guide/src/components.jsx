import { motion } from 'framer-motion';

// Gemeinsame Bausteine mit sanften Einblend-Animationen.
export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.45, ease: [0.22, 0.7, 0.3, 1] } }),
};

export function StepHead({ n, title, children }) {
  return (
    <motion.div className="step-head" initial="hidden" animate="show">
      <motion.span className="eyebrow" variants={fadeUp} custom={0}>Schritt {n} von 6</motion.span>
      <motion.h2 variants={fadeUp} custom={1}>{title}</motion.h2>
      {children && <motion.p variants={fadeUp} custom={2}>{children}</motion.p>}
    </motion.div>
  );
}

export function Panel({ title, children, i = 3, className = '', ...rest }) {
  return (
    <motion.div className={'panel ' + className} initial="hidden" animate="show" variants={fadeUp} custom={i} {...rest}>
      {title && <h3>{title}</h3>}
      {children}
    </motion.div>
  );
}

export function StepFoot({ n, nextLabel }) {
  return (
    <div className="foot">
      {n > 1 ? <a className="btn btn-ghost" href={`#schritt-${n - 1}`}>← Zurück</a> : <span />}
      {n < 6
        ? <motion.a whileHover={{ x: 3 }} className="btn btn-primary" href={`#schritt-${n + 1}`}>Weiter: {nextLabel} →</motion.a>
        : <a className="btn" href="#schritt-1">Von vorne beginnen</a>}
    </div>
  );
}

export const SimTag = ({ children = 'Simulation' }) => <span className="tag sim">{children}</span>;
