'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('table_team_to_tournament', [{
      id_team: 1,
      id_tournament: 1,
      status_daftar: 'waiting',
    },
    {
      id_team: 2,
      id_tournament: 2,
      status_daftar: 'waiting'
    },
    {
      id_team: 2,
      id_tournament: 3,
      status_daftar: 'pending'
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('table_team_to_tournament', null, {});
  }
};
