import PostTypeService from "@/lib/services/admin/postTypes.services";
import TagService from "@/lib/services/admin/tag.services";
import asyncHandler from "@/utils/asyncHandler";
const { NextResponse } = require("next/server");

const getTags = async (req) =>{
    
    const { searchParams } = new URL(req.url); 
    const postType = searchParams.get("postType"); 

    if(!postType){
        return NextResponse.json({ message: "Missing 'postType' query parameter" }, { status: 400 });
    }

    // check if postType is valid

    const postTypeId = await PostTypeService.getPostTypes(postType);

    if(!postTypeId){
        return NextResponse.
            json(
                {error : 'PostType not found'},
                { status: 404 }
            )
    }
    
    // check if postType has tags
    // reterive the tags for particular postType
    const tags = await TagService.getTags(postTypeId.id);

    if(!tags){
        return NextResponse.
            json(
                {message : 'Tags not found'},
                { status: 404 }
            )
       
    }

    return NextResponse.
        json(
            {data : tags},
            { status: 200 }
        )

}

export const GET = asyncHandler(getTags);