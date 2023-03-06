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
      // i think we should have a compound primary key made up of student_id and course_id here.
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
      course_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "course",
          key: "id",
        },
      }
    },
    {
      sequelize,
      modelName: "student_course",
      underscored: true,
      timestamps: false
    }
  );
  return Student_course;
};
