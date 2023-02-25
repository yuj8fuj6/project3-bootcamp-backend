"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.prerequisite);
      this.hasMany(models.course_indice);
      this.hasOne(models.forum);
      this.belongsToMany(models.student, { through: "student_course" });
    }
  }
  Course.init(
    {
      college: DataTypes.STRING,
      school: DataTypes.STRING,
      course_code: DataTypes.STRING,
      academic_unit: DataTypes.INTEGER,
      course_type: DataTypes.STRING,
      course_name: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "course",
      underscored: true,
      timestamps: false,
    },
  );
  return Course;
};
