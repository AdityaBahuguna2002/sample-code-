import { NextResponse } from "next/server";
import PostServices from "@/lib/services/admin/posts.services";
import asyncHandler from "@/utils/asyncHandler";
import AuthServices from "@/lib/services/admin/auth.services";

const switchPostStatus = async (req) => {
    const { searchParams } = new URL(req.url); 
    const id = searchParams.get("id"); 

    
    const user = await AuthServices.getSession();
    
    if(user.data.role !== "editor"){
        return NextResponse.json(
            {  
                success: false,
                error : 'You are not authorized to perform this action'
            }, 
            { status: 401 }
        );
    }

    if(!id){
            return NextResponse.json(
                { error: "Missing 'id' query parameter" }, 
                { status: 400 }
            );
    }

    const post = await PostServices.updatePostStatus(id);

    return NextResponse.json(
        {  
            success: true,
            message : 'Post status changed successfully'
        }, 
        { status: 200 }
    );
}

export const PUT = asyncHandler(switchPostStatus);