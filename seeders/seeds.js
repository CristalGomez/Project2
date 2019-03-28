'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bars', [{
      title: "Tyler's Pub",
      image: "https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/1496685642/membership-bars_the-cocktail-club-andrew-cebulka_2000x1125.jpg?itok=jvKJp2CY",
      city: "Houston",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bars', null, {});
  }
};