"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.student);
    }
  }
  User.init(
    {
      first_name: DataTypes.TEXT,
      last_name: DataTypes.TEXT,
      phone_number: DataTypes.INTEGER,
      email_address: DataTypes.STRING,
      password: DataTypes.STRING,
      profile_pic_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    },
  );
  return User;
};
