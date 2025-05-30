import db from "@/lib/database/models/index.js";

console.log("postTypes", db.PostType)
class PostTypeServices{
    
        static async getPostTypes(type) {
            try {
               
                const postTypes = await db.PostType.findOne({
                    where: { name: type }
                });
                return postTypes;
            } catch (error) {
                throw error;
            }
        }

}

export default PostTypeServices;