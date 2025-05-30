'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
  //   await queryInterface.createTable('User_Types', {
  //     id: {
  //       allowNull: false,
  //       primaryKey: true,
  //       type: Sequelize.UUID,
  //       defaultValue: Sequelize.literal('(UUID())')
  //     },
  //     role: {
  //       type: Sequelize.ENUM('editor', 'author'),
  //       allowNull: false,
  //       defaultValue: 'editor'
  //     },
  //     createdAt: Sequelize.DATE,
  //     updatedAt: Sequelize.DATE
  //   });
  // },
   await queryInterface.renameTable('posttype', 'post_types');
  },
  async down(queryInterface) {
    // await queryInterface.dropTable('User_Types');
  }
};