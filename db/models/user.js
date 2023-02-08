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
      this.hasOne(models.professor);
    }
  }
  User.init(
    {
      first_name: DataTypes.TEXT,
      last_name: DataTypes.TEXT,
      phone_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [8],
          notNull: { msg: "Please enter a valid phone number." },
        },
      },
      email_address: DataTypes.STRING,
      password: DataTypes.STRING,
      profile_pic_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: { msg: "Please upload a valid photo." } },
      },
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    },
  );
  return User;
};
