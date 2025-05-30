import AuthServices from "@/lib/services/admin/auth.services";
import PostServices from "@/lib/services/admin/posts.services";
import PostTypeService from "@/lib/services/admin/postTypes.services";
import asyncHandler from "@/utils/asyncHandler";
import ApiResponse from "@/utils/apiResponse";
import { NextResponse } from "next/server";

const createPost = async (req,) => {
  try {
    const body = await req.json();

    const {
      title,
      slug,
      description,
      selectedTags,
      categories,
      postType,
      content,
      uploadedUrl,
      status,
      actualPublishedDate,
      tableOfContent,
      meta
    } = body;

    const user = await AuthServices.getSession();
    if (!user?.data?.id) {
      return ApiResponse.unauthorized()
    }

    const userId = user.data.id;

    const postTypeData = await PostTypeService.getPostTypes(postType);
   
    if (!postTypeData?.id) {
      return ApiResponse.notFound('PostType not found')
    }

    if (selectedTags.length === 0) {
      return ApiResponse.badRequest('At least one tag is required');
    }
    if (categories.length === 0) {
     return ApiResponse.badRequest('At least one category is required');
    }

    const categoriesId = categories.map((cat) => cat.id);
    const selectedTagsId = selectedTags.map((tag) => tag.id);

    const post = await PostServices.createPostWithRelations({
      title,
      slug,
      description,
      selectedTagsId,
      categoriesId,
      postTypeId: postTypeData.id,
      content,
      uploadedUrl,
      status,
      actualPublishedDate,
      tableOfContent,
      meta,
      userId
    });

    if (!post) {
      return ApiResponse.serverError('Failed to create post');
    }

    return  ApiResponse.success('Post created successfully', post);

  } catch (error) {
    console.error('Create Post Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
};

export const POST = asyncHandler(createPost);