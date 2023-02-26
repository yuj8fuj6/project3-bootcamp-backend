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
   await queryInterface.bulkInsert("course_registrations", [
     {
       student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
       course_index_id: 1,
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
       course_index_id: 31,
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
       course_index_id: 21,
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
       course_index_id: 131,
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
       course_index_id: 101,
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
       course_index_id: 83,
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
       course_index_id: 65,
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
       course_index_id: 75,
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
       course_index_id: 15,
       created_at: new Date(),
       updated_at: new Date(),
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
    await queryInterface.bulkDelete("course_registrations", null, {});
  }
};
