import db from "@/lib/database/models/index.js";


class PostTypeService {
    static async getPostTypes(postType) {
        try {
           
            const postTypes = await db.PostType.findOne({
                where: { name: postType }
            });
            return postTypes;
        } catch (error) {
            throw error;
        }
    }
}

export default PostTypeService