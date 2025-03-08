import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Indicando explicitamente que esta rota é dinâmica
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const fileType = searchParams.get('file') || 'instagram';
    
    let svgPath = '';
    let width = 0;
    let height = 0;
    
    if (fileType === 'instagram') {
      svgPath = path.join(process.cwd(), 'public', 'barberpro-instagram.svg');
      width = 1080;
      height = 1080;
    } else if (fileType === 'luxury') {
      svgPath = path.join(process.cwd(), 'public', 'barberpro-luxury.svg');
      width = 800;
      height = 400;
    } else {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }
    
    // Lê o arquivo SVG
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    
    // Converte SVG para PNG usando sharp
    const pngBuffer = await sharp(Buffer.from(svgContent))
      .resize(width, height)
      .png()
      .toBuffer();
    
    // Define os headers para download
    const headers = new Headers();
    headers.set('Content-Type', 'image/png');
    headers.set('Content-Disposition', `attachment; filename="barberpro-${fileType}.png"`);
    
    return new NextResponse(pngBuffer, {
      status: 200,
      headers
    });
  } catch (error) {
    console.error('Error generating PNG:', error);
    return NextResponse.json({ error: 'Failed to generate PNG' }, { status: 500 });
  }
} 