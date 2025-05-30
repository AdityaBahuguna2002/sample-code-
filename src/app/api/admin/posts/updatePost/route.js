import { postSchema } from "@/schema/post.schema";
import ApiResponse from "@/utils/apiResponse";
import asyncHandler from "@/utils/asyncHandler";
import PostServices from "@/lib/services/admin/posts.services";
import AuthServices from "@/lib/services/admin/auth.services";


const updatePost = async(req)=>{

    const body = await req.json();

    // const parsedBody = await postSchema.safeParseAsync(body);

    // if(!parsedBody.success){
    //     return ApiResponse.badRequest(parsedBody.error);
    // }


    // check user is authenticated or not?
    // check if post exists in database?
    // update the post

    const user = await AuthServices.getSession();

    if(!user && !user.id){
        return ApiResponse.notFound('User not found');
    }

    const post = await PostServices.checkPostExistsById(body.id);

    if(!post){
        return ApiResponse.notFound('Post not found');
    }

    const updatedPost = await PostServices.updatePost(body);

    if(!updatedPost){
        return ApiResponse.conflict('cannot update the post');
    }

    return ApiResponse.success('Post updated successfully');

}


export  const PUT = asyncHandler(updatePost);