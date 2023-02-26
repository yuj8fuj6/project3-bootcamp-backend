"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Location.init(
    {
      latitude: DataTypes.DECIMAL,
      longitude: DataTypes.DECIMAL,
      index_code: DataTypes.INTEGER,
      location: DataTypes.STRING,
      course_code: DataTypes.STRING,
      course_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "location",
      underscored: true,
    },
  );
  return Location;
};
