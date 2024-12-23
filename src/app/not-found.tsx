'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="fr">
      <body style={{
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        backgroundColor: '#f4f4f4'
      }}>
        <div style={{
          textAlign: 'center',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: 'white',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ color: '#d32f2f', marginBottom: '15px' }}>Page Non Trouvée</h1>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
          <Link 
            href="/" 
            style={{
              display: 'inline-block',
              backgroundColor: '#d32f2f',
              color: 'white',
              padding: '10px 20px',
              textDecoration: 'none',
              borderRadius: '5px'
            }}
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </body>
    </html>
  );
}
