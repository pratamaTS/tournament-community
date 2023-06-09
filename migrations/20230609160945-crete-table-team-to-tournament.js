'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tabel_team_to_tournament', {
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
      "ALTER TABLE tabel_team_to_tournament ADD CONSTRAINT fk_team_id FOREIGN KEY (id_team) REFERENCES table_team(id)"
    );

    await queryInterface.sequelize.query(
      "ALTER TABLE tabel_team_to_tournament ADD CONSTRAINT fk_tournament_id FOREIGN KEY (id_tournament) REFERENCES table_tournament(id)"
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      "ALTER TABLE tabel_team_to_tournament DROP CONSTRAINT fk_team_id"
    );
    await queryInterface.sequelize.query(
      "ALTER TABLE tabel_team_to_tournament DROP CONSTRAINT fk_tournament_id"
    );
    return queryInterface.dropTable('tabel_tournament');
  }
};
