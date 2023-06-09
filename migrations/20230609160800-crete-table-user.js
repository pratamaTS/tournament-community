'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('table_user', {
      id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      status: {
          type: Sequelize.ENUM('active','inactive'),
          allowNull: false,
          defaultValue: 'inactive'
      },
      created_at: {
          type: 'TIMESTAMP',
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
          type: 'TIMESTAMP',
          allowNull: true,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('table_user');
  }
};
