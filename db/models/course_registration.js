"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course_registration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define separate 1-M relationships with both Person and Personality models
      // to enable them to query junction model
      this.belongsTo(models.course_indice);
      this.belongsTo(models.student);
    }
  }
  Course_registration.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      student_id: {
        type: DataTypes.UUID,
        references: {
          model: "student",
          key: "id",
        },
      },
      course_indice_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "course_indice",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "course_registration",
      underscored: true,
    }
  );
  return Course_registration;
};
