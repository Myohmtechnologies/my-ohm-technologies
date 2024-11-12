import Link from 'next/link';

const MerciPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Merci pour votre demande !</h1>
      <h2>un expert va vous contacter dasn les 24h</h2>
      <p>Nous avons bien reçu vos informations et nous vous contacterons bientôt.</p>
      
      {/* Lien vers la page d'accueil sans <a> */}
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline', fontSize: '18px' }}>
        Retour à la page d'accueil
      </Link>
    </div>
  );
};

export default MerciPage;
