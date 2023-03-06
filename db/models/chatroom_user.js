"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chatroom_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.chatroom);
      this.belongsTo(models.user);
      this.hasMany(models.message);
    }
  }
  Chatroom_user.init(
    // add unique constraint / composite PK for chatroom_id and user_id so that can only exist once
    {
      chatroom_id: {
        type: DataTypes.UUID,
        references: {
          model: "chatroom",
          key: "id",
        },
      },
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: "user",
          key: "id",
        },
      },
      message_id: {
        type: DataTypes.UUID,
        references: {
          model: "message",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "chatroom_user",
      underscored: true,
    }
  );
  return Chatroom_user;
};
