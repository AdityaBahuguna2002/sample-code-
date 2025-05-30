import db from '../../database/models/index.js';

class TagServices {
  static async getTags(postTypeId) {
    try {
      const tags = await db.Tag.findAll({
        where: { postTypeId },
        attributes: ['id', 'name', 'slug']  // Optional: select only what you need
      });
      return tags;
    } catch (error) {
      throw error;
    }
  }
}

export default TagServices;
