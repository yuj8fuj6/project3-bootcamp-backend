"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.chatroom);
      this.belongsTo(models.user, {
        as: "authorUser",
        foreignKey: "author_user_id",
      });
    }
  }
  Message.init(
    {
      message: DataTypes.UUID,
      chatroom_id: {
        type: DataTypes.UUID,
        references: {
          model: "chatroom",
          key: "id",
        },
      },
      author_user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "message",
      underscored: true,
    }
  );
  return Message;
};
