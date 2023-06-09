'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('table_user', [{
      name: 'John Doe',
      status: 'active'
    },
    {
      name: 'Shani Doe',
      status: 'active'
    },
    {
      name: 'Try Doe',
      status: 'inactive'
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('table_user', null, {});
  }
};
