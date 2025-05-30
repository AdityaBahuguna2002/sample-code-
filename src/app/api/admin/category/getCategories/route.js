import CategoriesService from "@/lib/services/admin/category.services";
import PostTypeService from "@/lib/services/admin/postTypes.services";
import asyncHandler from "@/utils/asyncHandler";
import { NextResponse } from "next/server";


const getCategories = async (req) => {
  const { searchParams } = new URL(req.url); 
  const postType = searchParams.get("postType");  

  if (!postType) {
    return Response.json({ message: "Missing 'postType' query parameter" }, { status: 400 });
  }

  // check if postType is valid

  const postTypeId = await PostTypeService.getPostTypes(postType);

  if (!postTypeId) {
    return Response.
      json(
        {message : 'PostType not found'},
        { status: 404 }
      )
  }

  // check if postType has categories
  // reterive the categories for particular postType
  const category = await CategoriesService.getCategories(postTypeId.id);

  if (!category) {
    return Response.
      json(
        {message : 'Categories not found'},
        { status: 404 }
      )
  }

  return Response.json({
    message: "Data fetched successfully",
    data: category, 
  });
}


export const GET = asyncHandler(getCategories);
