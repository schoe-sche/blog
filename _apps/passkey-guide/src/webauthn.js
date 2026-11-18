// Dünne Hülle um die WebAuthn-Schnittstelle des Browsers.
// Für die Übung: kein Server, nichts wird übertragen.
const rnd = (n) => crypto.getRandomValues(new Uint8Array(n));
export const shortId = (buf) => [...new Uint8Array(buf)].slice(0, 8).map((x) => x.toString(16).padStart(2, '0')).join('') + '…';
export const randomId = () => rnd(16).buffer;
export const supported = () => typeof window !== 'undefined' && !!window.PublicKeyCredential && !!navigator.credentials;

export async function createPasskey() {
  const cred = await navigator.credentials.create({
    publicKey: {
      challenge: rnd(32),
      rp: { name: 'TUXO Passkey-Übung' },
      user: { id: rnd(16), name: 'uebung@passkey-guide', displayName: 'TUXO Übung' },
      pubKeyCredParams: [{ type: 'public-key', alg: -7 }, { type: 'public-key', alg: -257 }],
      authenticatorSelection: { residentKey: 'preferred', userVerification: 'preferred' },
      timeout: 60000,
    },
  });
  return cred.rawId;
}

export async function signIn(credId) {
  await navigator.credentials.get({
    publicKey: { challenge: rnd(32), allowCredentials: [{ type: 'public-key', id: credId }], userVerification: 'preferred', timeout: 60000 },
  });
}
