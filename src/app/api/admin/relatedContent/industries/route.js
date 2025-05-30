// search on all postypes with related content using category slug (
// HealthCare, retails and e commerce, utility, services);

import PostServices from "@/lib/services/common/post.services";
import asyncHandler from "@/utils/asyncHandler/asyncHandler"
import { NextResponse } from "next/server";

const relatedContent = async (req) => {
    
    const {searchParams} = req.url();
    const categoriesParam = searchParams.get('categories');

    const categories = categoriesParam?.split(',') || [];

    if(categories.length === 0){
        return NextResponse.json({error : 'Missing categories'}, {status : 400});
    }

    const categoriesId = await CategoryServices.getCategoriesIdBySlug(categories);

    if(categoriesId.length === 0){
        return NextResponse.json({
            error : 'Categories not found',
        }, {
            status : 404
        });
    }

    


}

export const GET = asyncHandler(relatedContent);
