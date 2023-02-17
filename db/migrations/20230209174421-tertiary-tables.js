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
    await queryInterface.dropTable("admin_forums");
    await queryInterface.dropTable("post_upvotes");
    await queryInterface.dropTable("posts");
  },
};
