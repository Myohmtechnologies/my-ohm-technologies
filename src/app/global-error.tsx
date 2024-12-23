'use client';

export default function GlobalError() {
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
          <h1 style={{ color: '#d32f2f', marginBottom: '15px' }}>Erreur Système</h1>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Un problème technique majeur est survenu. Veuillez réessayer plus tard.
          </p>
          <a 
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
          </a>
        </div>
      </body>
    </html>
  );
}
