module.exports = function(sequelize, DataTypes) {
  var Admin = sequelize.define("Admin", {
    firstName: {
      types: DataTypes.STRING,
      notEmpty: true
    },
    lastName: {
      types: DataTypes.STRING,
      notEmpty: true
    },
    userName: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastLogin: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });
  Admin.associate = function(models) {
    Admin.hasMany(models.Medication);
  };
  return Admin;
};
