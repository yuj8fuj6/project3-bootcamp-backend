"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsToMany(models.forum, { through: "adminForums" });
    }
  }
  Admin.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: { model: "user", key: "id" },
      },
      admin_permission: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "admin",
      underscored: true,
    },
  );
  return Admin;
};
