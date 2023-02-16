"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AdminForum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.admin);
      this.belongsTo(models.forum);
    }
  }
  AdminForum.init(
    {
      admin_id: {
        type: DataTypes.UUID,
        references: { model: "admin", key: "id" },
      },
      forum_id: {
        type: DataTypes.UUID,
        references: { model: "forum", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "adminForum",
      underscored: true,
    },
  );
  return AdminForum;
};
