'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("prerequisites", [
     {
       course_id: "4",
       prerequisite_id: "3",
     },
     {
       course_id: "7",
       prerequisite_id: "5",
     },
     {
       course_id: "11",
       prerequisite_id: "7",
     },
     {
       course_id: "12",
       prerequisite_id: "4",
     },
     {
       course_id: "13",
       prerequisite_id: "1",
     },
     {
       course_id: "14",
       prerequisite_id: "10",
     },
     {
       course_id: "15",
       prerequisite_id: "4",
     },
     {
       course_id: "17",
       prerequisite_id: "3",
     },
     {
       course_id: "17",
       prerequisite_id: "4",
     },
     {
       course_id: "19",
       prerequisite_id: "15",
     },
     {
       course_id: "21",
       prerequisite_id: "17",
     },
     {
       course_id: "22",
       prerequisite_id: "17",
     },
     {
       course_id: "24",
       prerequisite_id: "10",
     },
     {
       course_id: "29",
       prerequisite_id: "37",
     },
     {
       course_id: "31",
       prerequisite_id: "23",
     },
     {
       course_id: "34",
       prerequisite_id: "17",
     },
     {
       course_id: "37",
       prerequisite_id: "13",
     },
     {
       course_id: "37",
       prerequisite_id: "15",
     },
     {
       course_id: "38",
       prerequisite_id: "17",
     },
     {
       course_id: "39",
       prerequisite_id: "12",
     },
   ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("prerequisites", null, {})
  }
};
