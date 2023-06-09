'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('table_tournament', [{
      id_games: 1,
      name: 'YODU Esports Series PUBG Event 1 A',
      status: 'regis_open',
      max_slot: 10
    },
    {
      id_games: 2,
      name: 'YODU Esports Series Valoran Event 1 A',
      status: 'regis_open',
      max_slot: 10
    },
    {
      id_games: 2,
      name: 'YODU Esports Series Valoran Event 2 A',
      status: 'ongoing',
      max_slot: 10
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('table_tournament', null, {});
  }
};
