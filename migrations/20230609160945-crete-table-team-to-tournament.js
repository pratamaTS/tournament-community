'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('table_team_to_tournament', {
      id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      id_team: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      id_tournament: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      status_daftar: {
          type: Sequelize.ENUM('waiting','pending','approved','rejected'),
          allowNull: false,
          defaultValue: 'waiting'
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
      "ALTER TABLE table_team_to_tournament ADD CONSTRAINT fk_team_id FOREIGN KEY (id_team) REFERENCES table_team(id)"
    );

    await queryInterface.sequelize.query(
      "ALTER TABLE table_team_to_tournament ADD CONSTRAINT fk_tournament_id FOREIGN KEY (id_tournament) REFERENCES table_tournament(id)"
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      "ALTER TABLE table_team_to_tournament DROP CONSTRAINT fk_team_id"
    );
    await queryInterface.sequelize.query(
      "ALTER TABLE table_team_to_tournament DROP CONSTRAINT fk_tournament_id"
    );
    return queryInterface.dropTable('table_team_to_tournament');
  }
};
