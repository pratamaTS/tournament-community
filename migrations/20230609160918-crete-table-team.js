'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('table_team', {
      id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      id_games: {
          type: Sequelize.INTEGER,
          allowNull: false
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
      created_by: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
      },
      updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
      }
    });

    await queryInterface.sequelize.query(
      "ALTER TABLE table_team ADD CONSTRAINT fk_games_id FOREIGN KEY (id_games) REFERENCES table_games(id)"
    );

    await queryInterface.sequelize.query(
      "ALTER TABLE table_team ADD CONSTRAINT fk_user_id FOREIGN KEY (created_by) REFERENCES table_user(id)"
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      "ALTER TABLE table_team DROP CONSTRAINT fk_games_id"
    );
    await queryInterface.sequelize.query(
      "ALTER TABLE table_team DROP CONSTRAINT fk_user_id"
    );
    return queryInterface.dropTable('table_team');
  }
};
