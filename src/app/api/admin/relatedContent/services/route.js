import asyncHandler from "@/utils/asyncHandler/asyncHandler";
import CategoriesService from "@/lib/services/admin/category.services";

const relatedContent = async () =>{
    const body = req.json();
    const {categories} = body;

    // get categories id from the categories slug
    // get posts from the categories id
    // group the post with the post type

    const categoriesId = await CategoryServices.getCategoriesIdBySlug(categories);

    if(categoriesId){
        
    }

}

export const GET = asyncHandler(relatedContent);