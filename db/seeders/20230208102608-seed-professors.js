"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "professors",
      [
        {
          id: "2c1640f8-d42d-4793-b8c2-be55a3d07d49",
          user_id: 51,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "9c954239-221c-4142-b78b-887ee9b71f6c",
          user_id: 52,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "0ab547da-3c8f-46d7-b248-197a0a0425f0",
          user_id: 53,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "9b0a6a89-a7e7-49dd-aa66-5742c95bc20f",
          user_id: 54,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "c0f5d3e4-222b-4e9c-be8a-15a6791ce76c",
          user_id: 55,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "8a359904-027b-4f41-8fa7-e41fa09f614b",
          user_id: 56,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "df0c5f3e-7406-46b1-a390-4e9599f6026f",
          user_id: 57,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "1e377770-77b4-4cfc-8ecc-cd09b3d7cb28",
          user_id: 58,
          admin_permission: true,
          school: "School of Electrical and Electronic Engineering",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "bcb3373f-6072-40af-a862-ddc83a8332eb",
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
