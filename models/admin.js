module.exports = function(sequelize, DataTypes) {
  var Admin = sequelize.define("Admin", {
    name: DataTypes.STRING
  });
  Admin.associate = function (models) {
    Admin.hasMany(models.Medication);
  };
  return Admin;
};
