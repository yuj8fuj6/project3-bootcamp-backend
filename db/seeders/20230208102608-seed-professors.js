"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "professors",
      [
        {
          user_id: 51,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 52,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 53,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 54,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 55,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 56,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 57,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 58,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 59,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("professors", null, {});
  },
};
