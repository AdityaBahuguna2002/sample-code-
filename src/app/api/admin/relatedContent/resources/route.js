

import PostServices from "@/lib/services/admin/posts.services";
import CategoriesService from "@/lib/services/admin/category.services";
import asyncHandler from "@/utils/asyncHandler/asyncHandler"
import { NextResponse } from "next/server";


const relatedContent = async (req) => {
    try {
        // getting the url from the request
        const { searchParams } = new URL(req.url);
        const categoriesParam = searchParams.get("categories");

        // splitting the categories into an array
        const categories = categoriesParam?.split(",") || [];

        if (!categories.length) {
            return NextResponse.json({ error: "No categories provided" }, { status: 400 });
        }

        //get the categories id and resolve the categoriesId
        const categoriesIdPromises = await CategoriesService.getCatgoriesIdBySlug(categories);
        const categoriesId = await Promise.all(categoriesIdPromises);

        if (!categoriesId || !categoriesId.length) {
            return NextResponse.json({ error: "Categories not found" }, { status: 404 });
        }

        const validCategoryIds = categoriesId.filter(Boolean).map(cat => cat.id);

        if (!validCategoryIds.length) {
            return NextResponse.json({ error: "No valid category IDs found" }, { status: 404 });
        }

        const posts = await Promise.all(
            validCategoryIds.map(async (categoryId) => {
                console.log("categoryId", categoryId);
                return await PostServices.getRelatedBlogContent(categoryId);
            })
        );

        // Flatten the array of arrays
        const flattenedPosts = posts.flat();
        
        return NextResponse.json({ posts: flattenedPosts });

    } catch (error) {
        console.error("Error in relatedContent:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export const GET = asyncHandler(relatedContent);
