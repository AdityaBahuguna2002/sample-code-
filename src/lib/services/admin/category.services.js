import db from "@/lib/database/models/index.js";

class CategoriesService {

   static async getCatgoriesIdBySlug(categories) {
    try {
        if (typeof categories === 'string') categories = [categories];
        
        const categoriesId = await Promise.all(
            categories.map(async (category) => {
                const cat = await db.Category.findOne({
                    where: { slug: category },
                    attributes: ['id']
                });
                return cat; // This returns the whole model instance
            })
        );
        
        return categoriesId.filter(Boolean); // Filter out null values
    } catch(error) {
        throw error;
    }
}
    /**
     * Retrieves all categories associated with a given post type.
     * 
     * @param {string} postTypeId - The ID of the post type whose categories are to be retrieved.
     * @returns {Promise<Array>} - A promise that resolves to an array of category objects each containing 'id', 'name', and 'slug' attributes.
     * @throws Will throw an error if the query fails.
     */

    static async getCategories(postTypeId){
        try{
            const categories = await db.Category.findAll(
                {
                    where : {postTypeId}, 
                    attributes : ['id', 'name', 'slug']
                }
            );
            return categories;
        }catch(error){
            throw(error);
        }
    }


    /**
     * Creates a new category for a given post type.
     * 
     * @param {string} postTypeId - The ID of the post type to create the category for.
     * @param {string} name - The name of the category.
     * @param {string} slug - The slug of the category.
     * @returns {Promise<Object>} - Returns the newly created category object.
     * @throws Will throw an error if the query fails.
     */
    static async setCategory(postTypeId, categoryName, categorySlug){
        try{

            const createNewCategory = await db.Category.create(
                {
                    name : categoryName,
                    slug : categorySlug,
                    postTypeId
                }
            )
           
            const {id, name, slug} = createNewCategory;
            return {id, name, slug};

        }catch(error){
            throw(error);
        }
    }
    /**
     * Checks if a category slug is unique within a given post type.
     * 
     * @param {string} postTypeId - The ID of the post type to check within.
     * @param {string} slug - The slug of the category to check for uniqueness.
     * @returns {Promise<Object|null>} - Returns the category object if found, otherwise null.
     * @throws Will throw an error if the query fails.
     */


    static async isCategorySlugUnique(postTypeId, slug){
        try{
            const category = await db.Category.findOne(
                {
                    where : {postTypeId, slug}
                }
            );
            return category;
        }catch(error){
            throw(error);
        }
    }


    /**
     * Checks if a category name is unique within a given post type.
     * 
     * @param {string} postTypeId - The ID of the post type to check within.
     * @param {string} name - The name of the category to check for uniqueness.
     * @returns {Promise<Object|null>} - Returns the category object if found, otherwise null.
     * @throws Will throw an error if the query fails.
     */
    static async isCategoryNameUnique(postTypeId, name){
        try{
            const category = await db.Category.findOne(
                {
                    where : {postTypeId, name}
                }
            );
            return category;
        }catch(error){
            throw(error);
        }
    }

}

export default CategoriesService;