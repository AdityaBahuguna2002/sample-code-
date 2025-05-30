'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.createTable('Categories', {
    //   id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.literal('(UUID())') },
    //   name: { type: Sequelize.STRING(150), allowNull: true },
    //   slug: { type: Sequelize.STRING(150), allowNull: true, unique: true },
    //   isDeleted: { type: Sequelize.BOOLEAN, defaultValue: true },
    //   createdAt: Sequelize.DATE,
    //   updatedAt: Sequelize.DATE,
    //   deletedAt: Sequelize.DATE
    // });
     await queryInterface.renameTable('category', 'categories');
  },
  async down(queryInterface) {
    // await queryInterface.dropTable('Categories');
  }
};