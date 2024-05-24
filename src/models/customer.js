"use strict";
const { DataTypes } = require("sequelize");

module.exports = function Customer(sequelize) {
  return sequelize.define(
    "Customer",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Customers",
      indexes: [
        {
          unique: true,
          fields: ["email"],
        },
      ],
    }
  );
};
