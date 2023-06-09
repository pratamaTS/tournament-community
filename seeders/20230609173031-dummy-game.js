'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('table_games', [{
      name: 'PUBG',
      status: 'active'
    },
    {
      name: 'Valoran',
      status: 'active'
    },
    {
      name: 'Mobile Legends',
      status: 'inactive'
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('table_games', null, {});
  }
};
