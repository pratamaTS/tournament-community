'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('table_games', {
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
          type: Sequelize.ENUM('regis_open','ongoing','finished'),
          allowNull: false,
          defaultValue: 'regis_open'
      },
      max_slot: {
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
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      "ALTER TABLE table_team DROP CONSTRAINT fk_games_id"
    );
    return queryInterface.dropTable('table_team');
  }
};
