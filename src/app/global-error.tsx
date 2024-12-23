'use client';

import Link from 'next/link';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';

export default function GlobalError() {
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
          <h1 style={{color: '#7f1d1d', fontSize: '3rem', marginBottom: '1rem'}}>Erreur Système</h1>
          <p style={{color: '#4b5563', fontSize: '1.25rem', marginBottom: '2rem'}}>
            Un problème technique est survenu
          </p>
          <Link 
            href="/" 
            style={{
              backgroundColor: '#7f1d1d', 
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
