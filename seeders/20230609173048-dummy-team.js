'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('table_team', [{
      id_games: 1,
      name: 'Jago Kandang',
      status: 'active',
      created_by: 1
    },
    {
      id_games: 2,
      name: 'Cupu Maju',
      status: 'active',
      created_by: 1
    },
    {
      id_games: 2,
      name: 'MOBEL',
      status: 'inactive',
      created_by: 2
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('table_team', null, {});
  }
};
