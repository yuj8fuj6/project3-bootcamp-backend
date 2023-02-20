"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user);
      this.hasMany(models.post);
      this.hasMany(models.post_upvote);
      this.belongsToMany(models.course_indice, {
        through: "course_registrations",
      });
      this.belongsToMany(models.course, { through: "student_courses" });
    }
  }
  Student.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: { model: "user", key: "id" },
      },
      total_unit: DataTypes.INTEGER,
      completed_unit: DataTypes.INTEGER,
      outstanding_unit: DataTypes.INTEGER,
      yearly_unit: DataTypes.INTEGER,
      degree: DataTypes.STRING,
      school: DataTypes.STRING,
      academic_year: DataTypes.INTEGER,
      gpa: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "student",
      underscored: true,
    },
  );
  return Student;
};
