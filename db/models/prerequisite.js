"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Prerequisite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.course);
    }
  }
  Prerequisite.init(
    {
      course_id: {
        type: DataTypes.INTEGER,
        references: { model: "course", key: "id" },
      },
      prerequisite_id: {
        type: DataTypes.INTEGER,
        references: { model: "course", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "prerequisite",
      underscored: true,
      timestamps: false,
    },
  );
  return Prerequisite;
};
