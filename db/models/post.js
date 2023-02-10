"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user);
      this.hasMany(models.post_upvote);
    }
  }
  Post.init(
    {
      content: DataTypes.TEXT,
      student_id: {
        type: DataTypes.UUID,
        references: { model: "student", key: "id" },
      },
      forum_id: {
        type: DataTypes.UUID,
        references: { model: "forum", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "post",
      underscored: true,
    },
  );
  return Post;
};
