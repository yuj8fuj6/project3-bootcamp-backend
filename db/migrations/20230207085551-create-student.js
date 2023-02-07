"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("students", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      total_unit: {
        type: Sequelize.INTEGER,
      },
      completed_unit: {
        type: Sequelize.INTEGER,
      },
      outstanding_unit: {
        type: Sequelize.INTEGER,
      },
      yearly_unit: {
        type: Sequelize.INTEGER,
      },
      degree: {
        type: Sequelize.STRING,
      },
      school: {
        type: Sequelize.STRING,
      },
      academic_year: {
        type: Sequelize.INTEGER,
      },
      gpa: {
        type: Sequelize.DECIMAL,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("students");
  },
};
