'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <html lang="fr">
      <body>
        <div style={{
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', 
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f0f2f5'
        }}>
          <h1 style={{color: '#dc2626', fontSize: '3rem', marginBottom: '1rem'}}>500</h1>
          <p style={{color: '#4b5563', fontSize: '1.25rem', marginBottom: '2rem'}}>
            Erreur serveur interne
          </p>
          <Link 
            href="/" 
            style={{
              backgroundColor: '#dc2626', 
              color: 'white', 
              padding: '10px 20px', 
              borderRadius: '5px', 
              textDecoration: 'none'
            }}
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </body>
    </html>
  );
}
