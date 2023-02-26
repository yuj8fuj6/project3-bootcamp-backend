"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "locations",
      [
        {
          latitude: 1.343572587250799,
          longitude: 103.68106886194161,
          index_code: 320641,
          location: "LT25",
          course_code: "IE1005",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3425339920467496,
          longitude: 103.68093825022277,
          index_code: 320642,
          location: "S2-B3B-08",
          course_code: "IE1005",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.343572587250799,
          longitude: 103.68106886194161,
          index_code: 951262,
          location: "S2-15-17c",
          course_code: "FE1073",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3461809275835426,
          longitude: 103.680102800187,
          index_code: 500011,
          location: "LT13",
          course_code: "PH1011",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3434711770803955,
          longitude: 103.68155465385743,
          index_code: 500012,
          location: "TR+106",
          course_code: "EG1001",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("locations", null, {});
  },
};
