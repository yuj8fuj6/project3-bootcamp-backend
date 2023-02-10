"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "admin_forums",
      [
        {
          forum_id: "8d6f46a6-a258-48e3-b0df-43ff71cd776b",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "2f541cf8-4fdd-45a7-8a94-73215f27602b",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "d8e5c695-1147-42c1-8a3f-c70cd18c9926",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "95c879c4-808d-4a74-93f4-270ec0981f78",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "49ba546c-6d03-48b0-bd0d-f6253d2e185b",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "fc7aae16-91d7-4603-81e8-d12d5e179b15",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "80c33f65-9c14-4f21-a0f6-6fb63e4231f1",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "aa7c7401-00bf-47c1-a5f1-877239524720",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "819ed7f2-d90d-4afb-a661-901ede58789c",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "739c18ef-4281-4751-943c-45a8efbfbcc8",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "fef6150f-8634-44c2-85a5-a6523db57cbf",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "6bda1533-514c-4f01-94e9-c8e0a7cee10e",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "3417aa35-8b3e-4eae-9435-89466042e504",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "59f89cd7-cd45-4610-bb35-4d02f2bd6a93",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "9e37d651-3c78-4e72-b94c-2c5e2b20fcb8",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "79275d5d-ed12-44c0-8307-8252f11715f9",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "f23cde5b-cc01-4e67-a7b2-3e1026a5fb1e",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "44d126e6-0ba8-45c4-8757-d5df8d90f82a",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "85339ff6-75f2-4e66-9440-07f5edd7de1b",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forum_id: "ddc0fea5-370a-4fdc-bb24-658f74e3d5c6",
          admin_id: "1d1ca425-3e33-4e93-a26e-a87dc1624b67",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("admin_forums", null, {});
  },
};
