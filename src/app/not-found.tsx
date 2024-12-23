'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <html>
      <head>
        <title>Page Non Trouvée</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ color: '#d32f2f', marginBottom: '15px' }}>404</h1>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Page non trouvée
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
