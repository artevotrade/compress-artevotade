import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';
import { db } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface CompressionResult {
  originalName: string;
  originalSize: number;
  compressedSize: number;
  format: string;
  compressedBuffer: Buffer;
  savings: number;
}

async function compressImage(
  buffer: Buffer,
  format: string,
  originalName: string
): Promise<CompressionResult> {
  const originalSize = buffer.length;
  let compressedBuffer: Buffer;
  let outputFormat = format;

  const sharpInstance = sharp(buffer);
  
  // Get image metadata
  const metadata = await sharpInstance.metadata();
  
  // Compression settings based on format
  switch (format.toLowerCase()) {
    case 'png':
      compressedBuffer = await sharp(buffer)
        .png({ 
          quality: 80,
          compressionLevel: 9,
          adaptiveFiltering: true
        })
        .toBuffer();
      break;
    case 'jpg':
    case 'jpeg':
      compressedBuffer = await sharp(buffer)
        .jpeg({ 
          quality: 80,
          mozjpeg: true,
          chromaSubsampling: '4:2:0'
        })
        .toBuffer();
      outputFormat = 'jpeg';
      break;
    case 'webp':
      compressedBuffer = await sharp(buffer)
        .webp({ 
          quality: 80,
          effort: 6
        })
        .toBuffer();
      break;
    default:
      // Default to webp for best compression
      compressedBuffer = await sharp(buffer)
        .webp({ quality: 80 })
        .toBuffer();
      outputFormat = 'webp';
  }

  const compressedSize = compressedBuffer.length;
  const savings = Math.round(((originalSize - compressedSize) / originalSize) * 100);

  return {
    originalName,
    originalSize,
    compressedSize,
    format: outputFormat,
    compressedBuffer,
    savings: Math.max(0, savings)
  };
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('files') as File[];
    
    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'Aucun fichier fourni' },
        { status: 400 }
      );
    }

    // Limit to 20 files at once
    if (files.length > 20) {
      return NextResponse.json(
        { error: 'Maximum 20 fichiers à la fois' },
        { status: 400 }
      );
    }

    const results: Array<{
      originalName: string;
      originalSize: number;
      compressedSize: number;
      format: string;
      savings: number;
      compressedBase64: string;
    }> = [];

    for (const file of files) {
      // Validate file type
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        continue; // Skip invalid files
      }

      // Validate file size (max 20MB)
      if (file.size > 20 * 1024 * 1024) {
        continue;
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      const format = file.type.split('/')[1];
      
      try {
        const result = await compressImage(buffer, format, file.name);
        
        results.push({
          originalName: result.originalName,
          originalSize: result.originalSize,
          compressedSize: result.compressedSize,
          format: result.format,
          savings: result.savings,
          compressedBase64: result.compressedBuffer.toString('base64')
        });

        // Log compression to database (anonymous, no user required)
        await db.compression.create({
          data: {
            originalSize: result.originalSize,
            compressedSize: result.compressedSize,
            format: result.format,
            fileName: result.originalName
          }
        });
      } catch (compressError) {
        console.error(`Error compressing ${file.name}:`, compressError);
        // Continue with other files
      }
    }

    if (results.length === 0) {
      return NextResponse.json(
        { error: 'Aucune image valide à compresser. Formats supportés: PNG, JPEG, WebP (max 20MB)' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      results,
      totalFiles: results.length
    });

  } catch (error) {
    console.error('Compression error:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la compression des images' },
      { status: 500 }
    );
  }
}
