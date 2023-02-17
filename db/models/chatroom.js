"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chatroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.user, { through: "chatroom_user" });
      this.hasMany(models.message);
    }
  }
  Chatroom.init(
    {
      room: DataTypes.STRING,
      user_id: {
        type: DataTypes.UUID,
        references: { model: "user", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "chatroom",
      underscored: true,
    }
  );
  return Chatroom;
};
