'use client';

import Link from 'next/link';

export default function NotFound() {
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
          <h1 style={{color: '#1d4ed8', fontSize: '3rem', marginBottom: '1rem'}}>404</h1>
          <p style={{color: '#4b5563', fontSize: '1.25rem', marginBottom: '2rem'}}>
            Page non trouvée
          </p>
          <Link 
            href="/" 
            style={{
              backgroundColor: '#1d4ed8', 
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
