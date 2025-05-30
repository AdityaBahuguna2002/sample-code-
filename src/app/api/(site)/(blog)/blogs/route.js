import axios from "axios";

export async function GET(req) {
  const page = req.nextUrl.searchParams.get("page") || 1; // Default to page 1
  const perPage = 6;

  try {
    const response = await axios.get(
      `https://cynoteck.com/wp-json/wp/v2/blog_post`, 
      {
        params: { page, per_page: perPage },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );
    
    return Response.json(response.data);
    
  } catch (error) {
    console.error("API Error:", error.message);
    return Response.json(
      { error: error.message || "Request failed" }, 
      { status: error.response?.status || 500 }
    );
  }
}