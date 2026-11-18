import { useEffect, useState } from 'react';

// Aktueller Schritt aus der Adresse (#schritt-3) – so lassen sich Schritte verlinken.
const read = () => {
  const m = /^#schritt-([1-6])$/.exec(window.location.hash);
  return m ? Number(m[1]) : 1;
};

export default function useHashStep() {
  const [step, setStep] = useState(read);
  useEffect(() => {
    const onHash = () => setStep(read());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return step;
}
