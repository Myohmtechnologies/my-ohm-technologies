import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb'; // Chemin vers ton fichier MongoDB
import bcrypt from 'bcrypt';

export async function POST(req) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ error: 'Nom d\'utilisateur et mot de passe requis' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db();

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await db.collection('users').findOne({ username });
    if (existingUser) {
      return NextResponse.json({ error: 'Utilisateur déjà existant' }, { status: 409 });
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newUser = {
      username,
      password: hashedPassword,
    };

    await db.collection('users').insertOne(newUser);

    return NextResponse.json({ message: 'Utilisateur créé avec succès' }, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error);
    return NextResponse.json({ error: 'Erreur lors de la création de l\'utilisateur' }, { status: 500 });
  }
}
