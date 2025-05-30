import asyncHandler from "@/utils/asyncHandler";
import { NextResponse } from "next/server";
import PostTypeService from "@/lib/services/admin/postTypes.services";
import CategoryService from "@/lib/services/admin/category.services";


    /**
     * Sets a category for a given post type.
     * 
     * @param {string} postType - The slug of the post type to set the category for.
     * @param {string} name - The name of the category.
     * @param {string} slug - The slug of the category.
     * @param {string} [parentSlug] - The slug of the parent category.
     * @returns {Promise<NextResponse>} - Returns a JSON response with the newly created category object.
     * @throws Will throw an error if the query fails.
     */

        //  Creates a new category for a given post type
        //  Checks for required parameters:
        //  postType in URL search parameters
        //  name, slug in request body
        //  Verifies post type existence in database
        //  Checks for uniqueness of:
        // Category slug within post type
        // Category name within post type
        // Returns error responses for:
        // Missing parameters (400)
        // Post type not found (404)
        // Duplicate category slug or name (409)
        // Category creation failure (500)

const setCategory = async (req) => {
    // name, slug and postTypeSlug must be present in req body?
    // do postType present in the database?
    // do this name or slug already present?
    
    const { searchParams } = new URL(req.url); 
    const postType = searchParams.get("postType");  

    const body = await req.json();

    const {name, slug, parentSlug} = body;

    console.log(body)

    if(!postType || !name || !slug) {
        return NextResponse.json(
            { error: "Missing parameters to set category" }, 
            { status: 400 }
        );
    }

    const postTypeId = await PostTypeService.getPostTypes(postType);

    if(!postTypeId) {
        return NextResponse.json(
            { error: "PostType not found" }, 
            { status: 404 }
        )
    }

    const [isCategorySlugIsUnique, isCategoryNameIsUnique] = await Promise.all(
        [
            CategoryService.isCategorySlugUnique(postTypeId.id, slug),
            CategoryService.isCategorySlugUnique(postTypeId.id, name)
        ]
    );
  
    if(isCategorySlugIsUnique) {
        return NextResponse.json(
            {error : "category slug already exists"},
            { status: 409 }
        );
    }

    if(isCategoryNameIsUnique) {
        return NextResponse.json(
            {error : "category name already exists"},
            { status: 409 }
        );
    }

    const category = await CategoryService.setCategory(postTypeId.id, name, slug, parentSlug);

    if(!category) { 
        return NextResponse.json(
            { error: "Failed to set category" }, 
            { status: 500 }
        );
    }

    return NextResponse.json(
        {data : category},
        {status : 201}
    );
    

}

export const POST = asyncHandler(setCategory);