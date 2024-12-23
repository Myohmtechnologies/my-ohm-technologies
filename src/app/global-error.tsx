'use client';

export default function GlobalError() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#d32f2f' }}>Erreur Système</h1>
        <p>Un problème technique majeur est survenu</p>
        <a 
          href="/" 
          style={{
            display: 'inline-block',
            backgroundColor: '#d32f2f',
            color: 'white',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '5px',
            marginTop: '15px'
          }}
        >
          Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
