import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb'; // Assurez-vous que le chemin est correct
import bcrypt from 'bcrypt';

export async function POST(req) {
  // Ajouter un log pour voir le corps de la requête
  console.log('Début de la requête POST /login');

  // On utilise "username" au lieu de "identifier"
  const { username, password } = await req.json(); // Récupération du nom d'utilisateur et du mot de passe
  
  // Afficher les données récupérées depuis la requête
  console.log('Données reçues :', { username, password });

  if (!username || !password) {
    console.log('Nom d\'utilisateur ou mot de passe manquant');
    return NextResponse.json({ error: 'Nom d\'utilisateur ou mot de passe requis' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db();

    // Vérifier si l'utilisateur existe
    console.log(`Recherche de l'utilisateur avec l'identifiant : ${username}`);
    const user = await db.collection('users').findOne({ username }); // Utilisation du champ "username"

    // Log si l'utilisateur est trouvé ou non
    if (!user) {
      console.log('Utilisateur non trouvé');
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    } else {
      console.log('Utilisateur trouvé :', user);
    }

    // Vérifier le mot de passe
    console.log('Vérification du mot de passe...');
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // Log si le mot de passe est correct ou non
    console.log('Mot de passe valide:', isPasswordValid);

    if (!isPasswordValid) {
      console.log('Mot de passe incorrect');
      return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 });
    }

    // Si la connexion est réussie, log et renvoyer la réponse de succès
    console.log('Connexion réussie');
    return NextResponse.json({ message: 'Connexion réussie' }, { status: 200 });
  } catch (error) {
    // Log de l'erreur si quelque chose se passe mal
    console.error('Erreur lors de la connexion:', error);
    return NextResponse.json({ error: 'Erreur lors de la connexion' }, { status: 500 });
  }
}
