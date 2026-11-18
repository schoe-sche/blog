export const SCENARIOS = [
  { key: 'lost', label: 'Smartphone verloren',
    what: 'Synchronisierte Passkeys – etwa im Schlüsselbund von Apple oder Google oder in einem Passwortmanager – sind nicht verloren. Sie liegen verschlüsselt in Ihrem Konto und kommen auf ein neues Gerät zurück.',
    todo: ['Gerät aus der Ferne sperren oder löschen (über das Konto des Herstellers).', 'Passwort des Kontos ändern, das Ihre Passkeys synchronisiert.', 'Auf dem Ersatzgerät anmelden – die Passkeys erscheinen wieder.', 'Im Team: Verlust melden, damit die IT verknüpfte Zugänge prüfen kann.'] },
  { key: 'new', label: 'Neues Gerät',
    what: 'Beim Gerätewechsel innerhalb derselben Plattform oder mit einem Passwortmanager wandern die Passkeys mit. Wechseln Sie die Plattform, legen Sie für wichtige Dienste neue Passkeys an.',
    todo: ['Neues Gerät mit Ihrem Konto bzw. Passwortmanager verbinden.', 'Bei den wichtigsten Diensten testweise anmelden.', 'Erst danach das alte Gerät zurücksetzen.'] },
  { key: 'key', label: 'Sicherheitsschlüssel weg',
    what: 'Passkeys auf einem Hardware-Sicherheitsschlüssel lassen sich nicht kopieren – das macht sie sehr sicher, aber auch unersetzlich. Deshalb gehört zu jedem Schlüssel ein zweiter.',
    todo: ['Mit dem Reserve-Schlüssel oder einer anderen hinterlegten Methode anmelden.', 'Den verlorenen Schlüssel in jedem Konto entfernen.', 'Einen neuen Reserve-Schlüssel registrieren.'] },
  { key: 'leave', label: 'Jemand verlässt die Firma',
    what: 'Mit einer zentralen Anmeldung ist der Austritt eine Sache von Minuten: Ein gesperrtes Konto bedeutet, dass die Passkeys der Person nirgends mehr funktionieren.',
    todo: ['Konto in der zentralen Anmeldung sperren.', 'Geteilte Tresore im Passwortmanager prüfen und betroffene Zugänge ändern.', 'Firmengeräte zurücknehmen und zurücksetzen.'] },
];
