import db from "@/lib/database/models";

console.log(db.PostType)
class PostServices {

    static async getLatestContent() {
        try {
          return await db.Post.findAll({
            attributes: ['title', 'slug', 'description', 'featuredImage', 'createdAt'],
            include: {
                model: db.PostType,
                where: {
                    slug: ['case-study', 'blog-post'],
                    isDeleted: false, 
                    deletedAt: null,
                },
                attributes : ['id', 'name', 'slug']
            },
            where: {
              isDeleted: 0, 
              deletedAt: null 
            },
            attribute:["title", "slug", "description", "featuredImage", "createdAt"],
            order: [['createdAt', 'DESC']],
            limit: 5 
          });
        } catch (error) {
          throw error;
        }
      }
    static async getPost(id) {
        try {
            return await db.Post.findByPk(id);
        } catch (error) {
            throw error;
        }
    }

    static async getPostMetaById(id) {
        try {
            return await db.Meta.findOne({
                where: { postId: id }
            });
        } catch (error) {
            throw error;
        }
    }

    static async getPostBySlug(slug) {
        try {

            return await db.Post.findOne({
                where: { 
                    slug , 
                    status :"published" 
                }
            });
        } catch (error) {
            throw error;
        }
    }
}

export default PostServices;