import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'realisation');
    
    // S'assurer que le dossier existe
    const fs = require('fs');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Upload de l'image principale
    const mainImageFile = data.get('mainImage') as File;
    let mainImagePath = '';
    
    if (mainImageFile) {
      const mainImageBytes = await mainImageFile.arrayBuffer();
      const mainImageBuffer = Buffer.from(mainImageBytes);
      const mainImageFilename = `main-${Date.now()}-${mainImageFile.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
      const mainImageFilepath = join(uploadDir, mainImageFilename);
      
      await writeFile(mainImageFilepath, mainImageBuffer);
      mainImagePath = `/uploads/realisation/${mainImageFilename}`;
    }

    // Upload des images secondaires
    const secondaryImageFiles = data.getAll('secondaryImages');
    const secondaryImagePaths: string[] = [];

    for (const file of secondaryImageFiles as File[]) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `secondary-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
      const filepath = join(uploadDir, filename);
      
      await writeFile(filepath, buffer);
      secondaryImagePaths.push(`/uploads/realisation/${filename}`);
    }

    return NextResponse.json({
      mainImage: mainImagePath,
      secondaryImages: secondaryImagePaths,
    });
  } catch (error) {
    console.error('Error uploading files:', error);
    return NextResponse.json(
      { error: 'Error uploading files' },
      { status: 500 }
    );
  }
}
