// src/pages/404.js (si tu utilises le répertoire "pages")
import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page non trouvée</h1>
      <p>Oops! La page que vous recherchez n&apos;existe pas.</p>
      <Link href="/">Retour à la page d&apos;accueil</Link>
    </div>
  );
}
