'use client';

export default function Documentation() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Guide de Déploiement et de Test du CRM</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Étape 1 : Préparer l'Environnement</h2>
        <ol className="list-decimal ml-6">
          <li>
            <p>
              <strong>Installer les Dépendances Nécessaires :</strong> Assurez-vous que toutes les bibliothèques nécessaires sont installées :
            </p>
            <pre className="bg-gray-100 p-4 rounded-md mt-2">
              <code>npm install</code>
              <br />
              <code>npm install @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid</code>
            </pre>
          </li>
          <li>
            <p>
              <strong>Configurer MongoDB :</strong> Vérifiez que votre fichier <code>.env</code> contient la variable suivante :
            </p>
            <pre className="bg-gray-100 p-4 rounded-md mt-2">
              <code>MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name</code>
            </pre>
          </li>
          <li>
            <p>
              <strong>Lancer le Serveur de Développement :</strong> Exécutez votre application avec la commande suivante :
            </p>
            <pre className="bg-gray-100 p-4 rounded-md mt-2">
              <code>npm run dev</code>
            </pre>
            <p>Votre application sera disponible à l'adresse <a href="http://localhost:3000" className="text-blue-500">http://localhost:3000</a>.</p>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Étape 2 : Accéder aux Pages Frontend</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Kanban :</strong> Accédez à <a href="/dashboard/kanban" className="text-blue-500">http://localhost:3000/dashboard/kanban</a>.
            <p>Contenu : Vue Kanban avec colonnes représentant les statuts (Nouveau contact, RDV fixé, etc.).</p>
          </li>
          <li>
            <strong>Liste :</strong> Accédez à <a href="/dashboard/list" className="text-blue-500">http://localhost:3000/dashboard/list</a>.
            <p>Contenu : Vue paginée des clients sous forme de tableau.</p>
          </li>
          <li>
            <strong>Calendrier :</strong> Accédez à <a href="/dashboard/calendar" className="text-blue-500">http://localhost:3000/dashboard/calendar</a>.
            <p>Contenu : Calendrier affichant les rendez-vous associés à chaque client.</p>
          </li>
          <li>
            <strong>Archives :</strong> Accédez à <a href="/dashboard/archive" className="text-blue-500">http://localhost:3000/dashboard/archive</a>.
            <p>Contenu : Liste des clients archivés (statut : "Archivé").</p>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Étape 3 : Tester les Fonctionnalités</h2>
        <ol className="list-decimal ml-6">
          <li>
            <p>
              <strong>Ajoutez des Données dans MongoDB :</strong> Utilisez ce script Node.js pour insérer des exemples :
            </p>
            <pre className="bg-gray-100 p-4 rounded-md mt-2">
              <code>
{`const { MongoClient } = require('mongodb');

async function seedDatabase() {
  const uri = "MONGODB_URI";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('database_name');
    const collection = db.collection('leads');

    await collection.insertMany([
      {
        nom: "Jean Dupont",
        email: "jean.dupont@email.com",
        telephone: "0612345678",
        status: "Nouveau contact",
        prochainRDV: null,
        notes: "Premier contact via formulaire web",
      },
      {
        nom: "Marie Curie",
        email: "marie.curie@email.com",
        telephone: "0612345679",
        status: "RDV fixé",
        prochainRDV: "2024-03-20T10:00:00",
        notes: "RDV pour devis",
      },
    ]);

    console.log("Base de données initialisée !");
  } finally {
    await client.close();
  }
}

seedDatabase();`}
              </code>
            </pre>
          </li>
          <li>
            <strong>Tester chaque page :</strong> Visitez les URLs mentionnées ci-dessus et vérifiez que les données s’affichent correctement.
          </li>
          <li>
            <strong>Modifier les données :</strong> Utilisez MongoDB Compass pour modifier les données en temps réel.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Étape 4 : Améliorations Futures</h2>
        <ul className="list-disc ml-6">
          <li>Ajoutez des boutons pour modifier le statut ou les détails des clients.</li>
          <li>Intégrez Google Calendar pour synchroniser les rendez-vous.</li>
          <li>Ajoutez une page pour afficher des statistiques et des rapports.</li>
        </ul>
      </section>
    </div>
  );
}
