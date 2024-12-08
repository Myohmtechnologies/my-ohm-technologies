import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {
  maxPoolSize: 10,
};

// Configuration MongoDB native pour les opérations directes
let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Configuration Mongoose pour les modèles et schémas
async function dbConnect() {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    return mongoose.connect(uri, {
      maxPoolSize: 10,
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

// Export pour MongoDB native (utilisé pour les leads et leurs actions)
export { clientPromise };

// Export pour Mongoose (utilisé pour les blogs et réalisations)
export default dbConnect;
