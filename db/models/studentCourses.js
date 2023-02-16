"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student_course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define separate 1-M relationships with both Person and Personality models
      // to enable them to query junction model
      this.belongsTo(models.course);
      this.belongsTo(models.student);
    }
  }
  Student_course.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      student_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "student",
          key: "id",
        },
      },
      course_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "course",
          key: "id",
        },
      },
      intensity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "student_course",
      underscored: true,
    }
  );
  return Student_course;
};
