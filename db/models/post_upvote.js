"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostUpvote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.student);
      this.belongsTo(models.post);
      this.belongsTo(models.forum);
    }
  }
  PostUpvote.init(
    {
      // i almost feel like we don't need a boolean here but rather if a record exists, we got an upvote
      upvote: DataTypes.BOOLEAN,
      post_id: {
        type: DataTypes.UUID,
        references: { model: "post", key: "id" },
      },
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
      modelName: "postUpvote",
      underscored: true,
    },
  );
  return PostUpvote;
};
