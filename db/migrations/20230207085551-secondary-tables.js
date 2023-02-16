"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("students", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        // defaultValue: Sequelize.literal("gen_random_uuid()"), //changed from Sequeliz.literal to UUID as gen_random_uuid DNE
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
        type: Sequelize.UUID,
        // defaultValue: Sequelize.literal("gen_random_uuid()"),
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
        type: Sequelize.UUID,
        // defaultValue: Sequelize.literal("gen_random_uuid()"),
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
    await queryInterface.createTable("course_indexs", {
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
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      group: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      day: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      start_time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      end_time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      duration: {
        //Duration is in hours, it is possible for 1.5hrs
        type: Sequelize.REAL,
        allowNull: false,
      },
      vacancy: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

    await queryInterface.createTable("prerequisites", {
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
      },
    });

    await queryInterface.createTable("forums", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      course_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "course",
          key: "id",
        },
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
    await queryInterface.dropTable("professors");
    await queryInterface.dropTable("admins");
    await queryInterface.dropTable("prerequisites");
    await queryInterface.dropTable("course_indexs");
    await queryInterface.dropTable("forums");
  },
};
