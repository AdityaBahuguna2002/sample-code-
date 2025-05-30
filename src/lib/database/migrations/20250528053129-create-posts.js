'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.createTable('Posts', {
    //   id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.literal('(UUID())') },
    //   title: { type: Sequelize.STRING(200), allowNull: false },
    //   slug: { type: Sequelize.STRING(200), allowNull: false, unique: true },
    //   description: { type: Sequelize.STRING(20000), allowNull: false },
    //   content: { type: Sequelize.JSON, allowNull: true },
    //   featuredImage: { type: Sequelize.STRING(500), allowNull: true },
    //   status: { type: Sequelize.ENUM('draft', 'published'), defaultValue: 'draft' },
    //   isDeleted: { type: Sequelize.BOOLEAN, defaultValue: false },
    //   userId: {
    //     type: Sequelize.UUID,
    //     references: { model: 'Users', key: 'id' },
    //     onDelete: 'CASCADE'
    //   },
    //   postTypeId: {
    //     type: Sequelize.UUID,
    //     references: { model: 'Post_Types', key: 'id' },
    //     onDelete: 'SET NULL'
    //   },
    //   createdAt: Sequelize.DATE,
    //   updatedAt: Sequelize.DATE,
    //   deletedAt: Sequelize.DATE
    // });
    // await queryInterface.addColumn('posts', 'tableOfContent', {
    //   type: Sequelize.JSON,
    //   allowNull: true
    // })
    await queryInterface.changeColumn('posts', 'content', {
      type: Sequelize.TEXT('long'),
      allowNull: true
    });
  },
  async down(queryInterface) {
    // await queryInterface.dropTable('Posts');
  }
};
