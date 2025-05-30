import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import AuthServices from '@/lib/services/admin/auth.services';

export const config = {
  api: {
    bodyParser: false, // Disable default body parsing for multipart
  },
};

export async function POST(request) {
  try {
    // Check session
    const session = await AuthServices.getSession();
    if (session.error) {
      return NextResponse.json({ message: session.error }, { status: 401 });
    }

    const userId = session.data.id;
    if (!userId) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    // Define upload directory
    const uploadDir = path.join(process.cwd(), 'public', 'upload', `${userId}`);
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Parse multipart form data
    const formData = await request.formData();
    const file = formData.get('image'); // Matches FormData field name from client
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }

    // Validate file size (5MB)
    const maxFileSize = 5 * 1024 * 1024;
    if (file.size > maxFileSize) {
      return NextResponse.json({ error: 'File too large' }, { status: 400 });
    }

    // Generate unique filename
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, fileName);

    // Save file
    const arrayBuffer = await file.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(arrayBuffer));

    // Return file URL
    const fileUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/upload/${userId}/${fileName}`;
    return NextResponse.json({ url: fileUrl }, { status: 200 });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}