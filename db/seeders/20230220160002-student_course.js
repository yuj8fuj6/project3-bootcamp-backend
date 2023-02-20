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
   await queryInterface.bulkInsert("student_courses", [
     {
       student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
       course_id: 1,
     },
     {
       student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
       course_id: 2,
     },
     {
       student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
       course_id: 3,
     },
     {
       student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
       course_id: 4,
     },
     {
       student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
       course_id: 5,
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
    await queryInterface.bulkDelete("student_courses", null, {})
  }
};
