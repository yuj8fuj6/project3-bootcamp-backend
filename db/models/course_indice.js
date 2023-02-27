//Index table cuurently is set-up to 1-M first, later will be moved to M-M when developing forum

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CourseIndices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.course);
      this.belongsToMany(models.student, { through: "course_registrations" });
    }
  }
  CourseIndices.init(
    {
      course_id: {
        type: DataTypes.INTEGER,
        references: { model: "course", key: "id" },
      },
      index_code: DataTypes.INTEGER,
      type: DataTypes.STRING,
      group: DataTypes.STRING,
      day: DataTypes.STRING,
      start_time: DataTypes.TIME,
      end_time: DataTypes.TIME,
      duration: DataTypes.FLOAT, //Duration is in Hrs, possible for 1.5hrs
      vacancy: DataTypes.INTEGER,
      location: DataTypes.STRING, //Later change to id if time permits
    },
    {
      sequelize,
      modelName: "course_indice",
      underscored: true,
      timestamps: false,
    }
  );
  return CourseIndices;
};
