"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("admin_forums", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      admin_id: {
        type: DataTypes.UUID,
        references: {
          model: "admins",
          key: "id",
        },
      },
      forum_id: {
        type: DataTypes.UUID,
        references: {
          model: "forums",
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
    await queryInterface.createTable("posts", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      student_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "students",
          key: "id",
        },
      },
      forum_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "forums",
          key: "id",
        },
      },
      upvote: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
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
    await queryInterface.createTable("post_upvotes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      upvote: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      post_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "posts",
          key: "id",
        },
      },
      student_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "students",
          key: "id",
        },
      },
      forum_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "forums",
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
    await queryInterface.createTable("course_registrations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_id: {
        type: DataTypes.UUID,
        references: {
          model: "students",
          key: "id",
        },
      },
      course_indice_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "course_indices",
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
    await queryInterface.createTable("student_courses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_id: {
        type: DataTypes.UUID,
        references: {
          model: "students",
          key: "id",
        },
      },
      course_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "courses",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("admin_forums");
    await queryInterface.dropTable("posts");
    await queryInterface.dropTable("post_upvotes");
    await queryInterface.dropTable("course_registrations");
    await queryInterface.dropTable("student_courses");
  },
};
