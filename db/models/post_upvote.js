"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post_Upvote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.student);
      this.belongsTo(models.post);
    }
  }
  Post_Upvote.init(
    {
      upvote: DataTypes.BOOLEAN,
      post_id: {
        type: DataTypes.UUID,
        references: { model: "post", key: "id" },
      },
      student_id: {
        type: DataTypes.UUID,
        references: { model: "student", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "post_upvote",
      underscored: true,
    },
  );
  return Post_Upvote;
};
