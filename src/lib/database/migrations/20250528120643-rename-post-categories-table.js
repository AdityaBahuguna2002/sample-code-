'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('postcategory', 'post_categories');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('postCategoires', 'Post_Categories');
  },
};