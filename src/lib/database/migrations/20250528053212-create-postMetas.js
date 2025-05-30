'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.createTable('Metas', {
    //   id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.literal('(UUID())') },
    //   title: { type: Sequelize.STRING(150), allowNull: false },
    //   slug: { type: Sequelize.STRING(150), allowNull: false, unique: true },
    //   description: { type: Sequelize.STRING(300), allowNull: false },
    //   keywords: { type: Sequelize.STRING(300), allowNull: true },
    //   ogTitle: { type: Sequelize.STRING(150), allowNull: true },
    //   ogDescription: { type: Sequelize.STRING(300), allowNull: true },
    //   ogImage: { type: Sequelize.STRING(500), allowNull: true },
    //   twitterCard: { type: Sequelize.STRING(50), defaultValue: 'summary_large_image' },
    //   twitterCreator: { type: Sequelize.STRING(50), allowNull: true },
    //   noIndex: { type: Sequelize.BOOLEAN, defaultValue: false },
    //   noFollow: { type: Sequelize.BOOLEAN, defaultValue: false },
    //   datePublished: { type: Sequelize.DATE, allowNull: true },
    //   dateModified: { type: Sequelize.DATE, allowNull: true },
    //   authorName: { type: Sequelize.STRING(100), allowNull: true },
    //   publisherName: { type: Sequelize.STRING(100), allowNull: true },
    //   publisherLogo: { type: Sequelize.STRING(500), allowNull: true },
    //   focusKeyword: { type: Sequelize.STRING(100), allowNull: true },
    //   isDeleted: { type: Sequelize.BOOLEAN, defaultValue: false },
    //   postId: {
    //     type: Sequelize.UUID,
    //     references: { model: 'Posts', key: 'id' },
    //     onDelete: 'CASCADE'
    //   },
    //   createdAt: Sequelize.DATE,
    //   updatedAt: Sequelize.DATE
    // });
    await queryInterface.renameTable('meta', 'metas');
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Metas');
  }
};