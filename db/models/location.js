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
      // generally you seem to be quite lax with allowing null values across your tables
      // what if lat is null, but long is not?
      // we could add validation for that as well to check if both exist
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
