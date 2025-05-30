import { NextResponse } from "next/server";
import asyncHandler from "@/utils/asyncHandler";
import PostServices from "@/lib/services/admin/posts.services";

const postById = async (req) => {

    const { searchParams } = new URL(req.url); 
    const id = searchParams.get("id"); 

    if(!id){
            return NextResponse.json(
                { message: "Missing 'id' query parameter" }, 
                { status: 400 }
            );
    }

    const post = await PostServices.getPost(id);

    if(!post) return NextResponse.json(
        {  
            success: false,
            message : 'Post not found'
        }, 
        { status: 404 }
    );

    return NextResponse.json(
        {
            success: true,
             post
        },
        { status: 200 }
    );
}

export const GET = asyncHandler(postById);