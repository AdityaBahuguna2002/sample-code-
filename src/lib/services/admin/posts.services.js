import db from "@/lib/database/models/index.js";
import { where } from "sequelize";



class PostServices {

  static async updatePost(data) {
    const transaction = await db.sequelize.transaction();

    try {
      const {
        id,
        title,
        slug,
        description,
        selectedTagsId = [],
        categoriesId = [],
        postTypeId,
        content,
        uploadedUrl,
        status,
        actualPublishedDate,
        tableOfContent,
        meta = {},
        userId
      } = data;

      const post = await db.Post.update({
        title,
        slug,
        description,
        content,
        status,
        userId,
        postTypeId,
        actualPublishedDate,
        tableOfContent,
        featuredImage: `${uploadedUrl}`
      }, {
        where: { id },
        transaction
      });

      if (categoriesId && categoriesId.length > 0) {
        await post.setCategories(categoriesId, { transaction });
      }

      // Create and associate tags
      if (selectedTagsId && selectedTagsId.length > 0) {
        await post.setTags(selectedTagsId, { transaction });
      }

      await db.sequelize.models.Meta.update(meta, {
        where: { postId: id },
        transaction
      });

      await transaction.commit();

      return post;

    }
    catch (error) {
      console.log("update post error", error);
      throw (error);
    }
  }

  static async checkPostExistsBySlug(slug) {
    try {
      return await db.Post.findOne({ where: { slug } });
    } catch (error) {
      throw error;
    }
  }

  static async checkPostExistsById(id) {
    try {
      return await db.Post.findOne({ where: { id } });
    } catch (error) {
      throw error;
    }
  }

  static async getPost(id) {
    try {
      return await db.Post.findOne({
        where: { id },
        include: [
          {
            model: db.Category,
            attributes: ['id', 'name', 'slug']
          },
          {
            model: db.Tag,
            attributes: ['id', 'name', 'slug']
          }
        ]
      })
    } catch (error) {
      throw error;
    }
  }


  static async getRelatedBlogContent(categoryIds) {
    try {
      // Get all post IDs under these categories
      const postCategories = await db.sequelize.models.PostCategory.findAll({
        where: { categoryId: categoryIds },
        attributes: ['postId'],
        group: ['postId']
      });

      const postIds = postCategories.map(pc => pc.postId);

      if (!postIds.length) return [];

      return await db.Post.findAll({
        where: { id: postIds },
        attributes: ['slug', 'title', 'description'],
      });
    } catch (error) {
      throw error;
    }
  }




  static async getALLPost(postTypeId) {
    try {
      return await db.Post.findAll({
        where: {
          postTypeId,
          isDeleted: 0
        }
      });
    } catch (error) {

      console.log(error)
      throw error;
    }
  }


  static async deletePostById(id) {
    try {
      return await db.Post.update(
        { isDeleted: 1 },
        { where: { id } }
      );
    } catch (error) {
      throw error;
    }
  }


  static async updatePostStatus(id) {
    try {
      const post = await db.Post.findByPk(id);
      return await db.Post.update(
        { status: post.status === "published" ? "draft" : "published" },
        { where: { id } }
      );
    } catch (error) {
      throw error;
    }
  }

  // Creates a new post in the database with its relations to categories and tags.
  // Takes an object with postData, categorySlugs, tagSlugs, and userId as parameters.
  // Uses a database transaction to ensure atomicity.
  // Creates the post and retrieves IDs of associated categories and tags based on their slugs.
  // Associates the post with categories and tags using their IDs.
  // Commits the transaction if successful, or rolls back if an error occurs.


  static async createPostWithRelations({
    title,
    slug,
    description,
    selectedTagsId,
    categoriesId,
    postTypeId,
    content,
    uploadedUrl,
    status,
    actualPublishedDate,
    tableOfContent,
    meta,
    userId
  }) {


    const transaction = await db.sequelize.transaction();


    try {
      // Create the post
      const post = await db.Post.create(
        {
          title,
          slug,
          description,
          content,
          status,
          userId,
          postTypeId,
          actualPublishedDate,
          tableOfContent,
          featuredImage: `${uploadedUrl}`
        },
        { transaction }
      );

      // Associate categories
      if (categoriesId && categoriesId.length > 0) {
        await post.setCategories(categoriesId, { transaction });
      }

      // Create and associate tags
      if (selectedTagsId && selectedTagsId.length > 0) {
        await post.setTags(selectedTagsId, { transaction });
      }

      const savedMetaData = await db.Meta.create({
        ...meta,
        postId: post?.id
      }, { transaction });

      await transaction.commit();
      return post;

    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  };
}

export default PostServices;