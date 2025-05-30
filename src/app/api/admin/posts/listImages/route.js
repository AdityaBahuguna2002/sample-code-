import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import AuthServices from '@/lib/services/admin/auth.services';

export async function GET(request) {
  try {
    const session = await AuthServices.getSession();
    if (session.error) {
      return NextResponse.json({ message: session.error }, { status: 401 });
    }

    const userId = session.data.id;

    if (!userId) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }
    const uploadDir = path.join(process.cwd(), 'public', 'content', `${userId}`);
    if (!fs.existsSync(uploadDir)) {
      return NextResponse.json({ images: [] }, { status: 200 });
    }

    const files = fs.readdirSync(uploadDir).filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif','jfif'].includes(ext);
    });

    const images = files.map((file) => ({
      name: file,
      url: `/content/${userId}/${file}`,
    }));

    return NextResponse.json({ images }, { status: 200 });
  } catch (error) {
    console.error('List images error:', error);
    return NextResponse.json({ error: 'Failed to list images' }, { status: 500 });
  }
}