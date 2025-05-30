// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// export async function DELETE(request) {
//   const url = request.nextUrl.searchParams.get("url");

//   try {
//     const filePath = path.join(process.cwd(), "public", url);

//     if (!fs.existsSync(filePath)) {
//       return NextResponse.json({ error: "Image not found" }, { status: 404 });
//     }

//     fs.unlinkSync(filePath);
//     return NextResponse.json({ error: "Image removed successfully" }, { status: 200 });

//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
