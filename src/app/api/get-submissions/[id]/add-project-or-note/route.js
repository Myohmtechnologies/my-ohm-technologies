export async function PUT(request, { params }) {
    try {
      const { db } = await connectToDatabase();
      const { type, data } = await request.json(); // `type` peut être 'historique' ou 'projets'
  
      const updateField = type === 'historique' ? { historique: data } : { projets: data };
  
      const result = await db.collection('leads').updateOne(
        { _id: new ObjectId(params.id) },
        { $push: updateField }
      );
  
      if (!result.matchedCount) {
        return new Response('Lead non trouvé', { status: 404 });
      }
  
      return new Response('Donnée ajoutée avec succès', { status: 200 });
    } catch (error) {
      console.error('Erreur lors de l’ajout de données :', error);
      return new Response('Erreur serveur', { status: 500 });
    }
  }
  