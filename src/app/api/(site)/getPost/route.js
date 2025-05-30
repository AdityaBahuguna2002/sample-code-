import asyncHandler from "@/utils/asyncHandler";
import { NextResponse } from "next/server";
import PostTypeServices from "@/lib/services/common/postType.services";
import PostServices from "@/lib/services/common/post.services";
import ApiResponse from "@/utils/apiResponse";



const getPostType = async (req) => {
    const { searchParams } = new URL(req.url); 
    const postType = searchParams.get("postType"); 
    const slug = searchParams.get("slug");
    
    if(!postType || !slug){
        return ApiResponse.badRequest("postType or slug is missing");
    }

    const postTypeId = await PostTypeServices.getPostTypes(postType);

    if(!postTypeId){
        return ApiResponse.notFound('PostType not found');
    }

    const post = await PostServices.getPostBySlug(slug);

    if(!post){
        return ApiResponse.notFound("post not Found")
    }

    const meta = await PostServices.getPostMetaById(post.id);
    
    if(!meta){
        return NextResponse.
            json(
                {error : 'Post meta not found'},
                { status: 404 }
            )
    }
    
    return NextResponse.json(
        { 
            post: post,
            meta: meta 
        },
        { 
            status: 200 
        }
    );
}

export const GET = asyncHandler(getPostType);