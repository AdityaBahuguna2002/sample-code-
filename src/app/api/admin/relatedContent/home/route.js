import PostServices from "@/lib/services/common/post.services";
import ApiResponse from "@/utils/apiResponse";
import asyncHandler from "@/utils/asyncHandler/asyncHandler";

const relatedContent = async (req) => {
    try{
        const relatedPosts = await PostServices.getLatestContent();
        if(!relatedPosts) return [];
        return ApiResponse.success(relatedPosts);

    }catch(error){
        console.log("Error in relatedContent", error);
        throw error;
    }
}

export const GET = asyncHandler(relatedContent);