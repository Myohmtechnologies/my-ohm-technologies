import { connectToDatabase } from '../../../lib/mongodb';
import { NextResponse } from 'next/server';

// Fonction pour récupérer un blog par son slug
async function fetchBlogFromDatabase(slug) {
  const { db } = await connectToDatabase();
  const blog = await db.collection("blogs").findOne({ slug });
  return blog; // Retourne le blog ou null si non trouvé
}

// Endpoint API pour récupérer un blog par son slug
export async function GET(req, { params }) {
  const { slug } = await params; // Assurez-vous d'attendre les params

  if (!slug) {
    return NextResponse.json({ error: "Slug manquant" }, { status: 400 });
  }

  try {
    const blog = await fetchBlogFromDatabase(slug);

    if (!blog) {
      return NextResponse.json({ error: "Blog non trouvé" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Erreur lors de la récupération du blog :", error);
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
  }
}

// Mettre à jour un blog par slug
export async function PATCH(req, { params }) {
  const { slug } = await params; // Attendez params
  const { title, content, sections } = await req.json();

  try {
    const { db } = await connectToDatabase();
    const updateData = { title, content, sections };

    const result = await db.collection("blogs").updateOne(
      { slug },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Blog introuvable" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog mis à jour avec succès" });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du blog :", error);
    return NextResponse.json({ error: "Erreur lors de la mise à jour du blog" }, { status: 500 });
  }
}

// Supprimer un blog par slug
export async function DELETE(req, { params }) {
  const { slug } = await params; // Attendez params

  try {
    const { db } = await connectToDatabase();
    const result = await db.collection("blogs").deleteOne({ slug });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Blog introuvable" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression du blog :", error);
    return NextResponse.json({ error: "Erreur lors de la suppression du blog" }, { status: 500 });
  }
}
