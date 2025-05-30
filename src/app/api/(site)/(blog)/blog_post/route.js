import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req) {
    const slug = req.nextUrl.searchParams.get("slug");

  try {
    const response = await axios.get(`https://cynoteck.com/wp-json/wp/v2/blog_post?slug=${slug}`);
    console.log(response.data);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: "Request failed" }, { status: 500 });
  }
}
