"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //Users Table
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.TEXT,
      },
      last_name: {
        type: Sequelize.TEXT,
      },
      phone_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      email_address: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      profile_pic_url: {
        type: Sequelize.STRING,
        allowNull: false,
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

    await queryInterface.createTable("courses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      college: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      school: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      course_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      academic_unit: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      course_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      course_name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
    await queryInterface.dropTable("courses");
  },
};
