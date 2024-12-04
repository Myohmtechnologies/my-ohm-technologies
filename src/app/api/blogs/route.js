// src/app/api/blogs/route.js
import { connectToDatabase } from '../../lib/mongodb';
import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';
import { ObjectId } from 'mongodb';

// Configuration de Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Fonction pour générer un slug
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Enlève les caractères spéciaux
    .replace(/\s+/g, '-')     // Remplace les espaces par des tirets
    .trim();
}

// Modification de la fonction POST pour ajouter un slug
export async function POST(request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title');
    const content = formData.get('content');
    const imageFile = formData.get('image');

    // Générer le slug
    const slug = generateSlug(title);

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    let imageUrl = null;

    // Téléverser l'image sur Cloudinary si elle est présente
    if (imageFile) {
      const imageBuffer = await imageFile.arrayBuffer();
      const base64Image = Buffer.from(imageBuffer).toString('base64');
      const result = await cloudinary.v2.uploader.upload(`data:image/jpeg;base64,${base64Image}`);
      imageUrl = result.secure_url;
    }

    const { db } = await connectToDatabase();

    const newBlog = {
      title,
      content,
      imageUrl,
      createdAt: new Date(),
      slug, // Ajouter le champ slug
    };

    const result = await db.collection('blogs').insertOne(newBlog);

    return NextResponse.json({ message: 'Blog created', blog: { _id: result.insertedId, ...newBlog } });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: 'Error creating blog', details: error.message }, { status: 500 });
  }
}

// Endpoint pour récupérer tous les blogs ou un blog spécifique
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    const { db } = await connectToDatabase();

    // Si un ID est fourni, récupérer un blog spécifique
    if (id) {
      const blog = await db.collection('blogs').findOne({ _id: new ObjectId(id) });
      if (!blog) {
        return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
      }

      const blogWithId = {
        _id: blog._id.toString(),
        title: blog.title,
        content: blog.content,
        imageUrl: blog.imageUrl,
        createdAt: blog.createdAt,
        slug: blog.slug, // Inclure le slug ici
      };

      return NextResponse.json(blogWithId);
    }

    // Sinon, récupérer tous les blogs
    const blogs = await db.collection('blogs').find({}).toArray();
    const blogsWithId = blogs.map(blog => ({
      _id: blog._id.toString(),
      title: blog.title,
      content: blog.content,
      imageUrl: blog.imageUrl,
      createdAt: blog.createdAt,
      slug: blog.slug, // Inclure le slug ici
    }));

    if (!blogs || blogs.length === 0) {
      return NextResponse.json({ message: 'Aucun article de blog trouvé.' }, { status: 404 });
    }

    return NextResponse.json(blogsWithId, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la récupération des blogs:', error);
    return NextResponse.json({ error: 'Erreur lors de la récupération des blogs.', details: error.message }, { status: 500 });
  }
}

// Endpoint pour supprimer un blog
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "L'ID du blog est requis" }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    const result = await db.collection("blogs").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Blog introuvable" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression du blog :", error);
    return NextResponse.json({ error: "Erreur lors de la suppression du blog.", details: error.message }, { status: 500 });
  }
}

// Endpoint pour mettre à jour une section d'un blog
export async function PATCH(req) {
  try {
    const { id, title, content, sections } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "L'ID du blog est requis" }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    const updateData = {};

    if (title) updateData.title = title;
    if (content) updateData.content = content;

    // Si des sections sont spécifiées, modifiez-les
    if (sections) {
      updateData.sections = sections;
    }

    const result = await db.collection("blogs").updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Blog introuvable" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog mis à jour avec succès" });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du blog :", error);
    return NextResponse.json({ error: "Erreur lors de la mise à jour du blog.", details: error.message }, { status: 500 });
  }
}
