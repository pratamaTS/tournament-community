'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('table_tournament', {
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

    await queryInterface.sequelize.query(
      "ALTER TABLE table_tournament ADD CONSTRAINT fk_games_t_id FOREIGN KEY (id_games) REFERENCES table_games(id)"
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      "ALTER TABLE table_tournament DROP CONSTRAINT fk_games_t_id"
    );
    return queryInterface.dropTable('table_tournament');
  }
};
