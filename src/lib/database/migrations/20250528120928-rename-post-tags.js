'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('posttag', 'post_tags');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('postCategoiires', 'Post_Categories');
  },
};