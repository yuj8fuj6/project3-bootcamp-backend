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
    await queryInterface.createTable("professors", {
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
      admin_permission: {
        type: Sequelize.BOOLEAN,
      },
      school: {
        type: Sequelize.STRING,
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
    await queryInterface.createTable("admins", {
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
      admin_permission: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.createTable("course_index", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      course_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "course",
          key: "id",
        },
      },
      index_code: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      group: {
        type: Sequelize.STRING,
      },
      day: {
        type: Sequelize.STRING,
      },
      start_time: {
        type: Sequelize.TIME,
      },
      end_time: {
        type: Sequelize.TIME,
      },
      duration: {
        type: Sequelize.REAL,
      },
      vacancy: {
        type: Sequelize.INTEGER,
      },
      location: {
        type: Sequelize.STRING,
      },
    });

    await queryInterface.createTable("prerequisite", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      course_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "course",
          key: "id",
        },
      },
      prerequisite_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "course",
          key: "id",
        },
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("students");
    await queryInterface.dropTable("professors");
    await queryInterface.dropTable("admins");
    await queryInterface.dropTable("prerequisite");
    await queryInterface.dropTable("course_index");
  },
};
