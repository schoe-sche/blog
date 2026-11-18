// Kleine Bausteine, die alle Schritte gemeinsam nutzen.
export function StepHead({ n, title, children }) {
  return (
    <div className="step-head">
      <span className="eyebrow">Schritt {n} von 6</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export function Panel({ title, children, ...rest }) {
  return (
    <div className="panel" {...rest}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}

export function StepFoot({ n, nextLabel }) {
  return (
    <div className="foot">
      {n > 1 ? <a className="btn btn-ghost" href={`#schritt-${n - 1}`}>← Zurück</a> : <span />}
      {n < 6
        ? <a className="btn btn-primary" href={`#schritt-${n + 1}`}>Weiter: {nextLabel} →</a>
        : <a className="btn" href="#schritt-1">Von vorne beginnen</a>}
    </div>
  );
}

export const SimTag = ({ children = 'Simulation' }) => <span className="tag sim">{children}</span>;
