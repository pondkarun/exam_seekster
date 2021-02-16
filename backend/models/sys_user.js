const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_user', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      comment: "UUID"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "เมล"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "รหัสผ่าน"
    },
    f_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื่อจริง"
    },
    l_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "นามสกุล"
    },
    is_use: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 1
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'sys_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
