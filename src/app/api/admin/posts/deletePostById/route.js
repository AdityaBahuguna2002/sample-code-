import { NextResponse } from "next/server";
import asyncHandler from "@/utils/asyncHandler";
import PostServices from "@/lib/services/admin/posts.services";

const deletePostById = async (req) => {
    const { searchParams } = new URL(req.url); 
    const id = searchParams.get("id");

    if(!id){
        return NextResponse.json(
            { message: "Missing 'id' query parameter" }, 
            { status: 400 }
        );
    }

    const post = await PostServices.deletePostById(id);

    return NextResponse.json(
        {  
            success: true,
            message : 'Post deleted successfully'
        }, 
        { status: 200 }
    );
};

export const DELETE = asyncHandler(deletePostById);