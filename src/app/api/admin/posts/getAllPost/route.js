import { NextResponse } from "next/server";
import asyncHandler from "@/utils/asyncHandler";
import PostTypeService from "@/lib/services/admin/postTypes.services";
import PostServices from "@/lib/services/admin/posts.services";

const getAllPost = async (req) => {
  const { searchParams } = new URL(req.url); 
  const postType = searchParams.get("postType"); 

  if(!postType){
      
      return NextResponse.json(
        { message: "Missing 'postType' query parameter" }, 
        { status: 400 }
      );

  }

  const postTypeId = await PostTypeService.getPostTypes(postType);

  const posts = await PostServices.getALLPost(postTypeId.id);

  if(!posts) return NextResponse.json(
    {  
      success: false,
      message : 'Posts not found'
    }, 
 
    { status: 404 }
  );

  return NextResponse.json(
    {
      success: true,
       posts
    },
  )
}


export const GET = asyncHandler(getAllPost);