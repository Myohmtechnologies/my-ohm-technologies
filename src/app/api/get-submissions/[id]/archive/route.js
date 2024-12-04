export async function PUT(request, { params }) {
    try {
      const { db } = await connectToDatabase();
      const { id } = params;
  
      const result = await db.collection('leads').updateOne(
        { _id: new ObjectId(id) },
        { $set: { status: 'Archivé' } }
      );
  
      if (!result.matchedCount) {
        return new Response('Lead non trouvé', { status: 404 });
      }
  
      return new Response('Lead archivé avec succès', { status: 200 });
    } catch (error) {
      console.error('Erreur lors de l’archivage du lead :', error);
      return new Response('Erreur serveur', { status: 500 });
    }
  }
  