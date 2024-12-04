import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  serverSelectionTimeoutMS: 20000, // Temps d'attente pour la sélection du serveur
  socketTimeoutMS: 45000,          // Temps d'attente des sockets
  maxPoolSize: 10,                 // Limite du pool de connexions
};

let client;
let clientPromise;

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

clientPromise
  .then(() => console.log('MongoDB connecté avec succès'))
  .catch(err => console.error('Erreur de connexion MongoDB:', err));

export async function connectToDatabase(dbName = 'your-database-name') {
  try {
    console.log('Tentative de connexion à MongoDB...');
    const client = await clientPromise;
    const db = client.db(dbName);
    console.log('Connexion réussie à la base de données:', dbName);
    return { client, db };
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
    throw error;
  }
}

export default clientPromise;
