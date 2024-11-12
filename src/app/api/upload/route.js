import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ error: "Aucun fichier n'a été fourni" }, { status: 400 });
  }

  const buffer = await file.arrayBuffer();
  const filePath = path.join(process.cwd(), "public/uploads", file.name);

  // Sauvegarde du fichier
  fs.writeFileSync(filePath, Buffer.from(buffer));

  // Retourne l'URL d'accès au fichier
  return NextResponse.json({ url: `/uploads/${file.name}` });
}
