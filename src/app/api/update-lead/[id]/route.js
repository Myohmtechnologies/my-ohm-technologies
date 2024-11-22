import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
import formidable from "formidable";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function PUT(req, { params }) {
  const { id } = params;
  const { db } = await connectToDatabase();

  const form = new formidable.IncomingForm();
  form.uploadDir = "./uploads";
  form.keepExtensions = true;

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Erreur lors de l'analyse des fichiers :", err);
        reject(new Response("Erreur lors du traitement des fichiers", { status: 500 }));
        return;
      }

      try {
        const updates = {
          note: fields.note,
          status: fields.status,
          images: files
            ? Object.values(files).map((file) => file.filepath) // Stocker les chemins des images
            : [],
        };

        await db.collection("leads").updateOne(
          { _id: new ObjectId(id) },
          { $set: updates }
        );

        resolve(new Response(JSON.stringify({ success: true }), { status: 200 }));
      } catch (error) {
        console.error("Erreur lors de la mise à jour du lead :", error);
        reject(new Response("Erreur serveur", { status: 500 }));
      }
    });
  });
}
