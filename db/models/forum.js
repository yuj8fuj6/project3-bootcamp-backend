"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.course);
      this.belongsToMany(models.admin, { through: "adminForums" });
      this.hasMany(models.post);
      this.hasMany(models.postUpvote);
    }
  }
  Forum.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      course_id: {
        type: DataTypes.INTEGER,
        references: { model: "course", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "forum",
      underscored: true,
    },
  );
  return Forum;
};
