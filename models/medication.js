module.exports = function (sequelize, DataTypes) {
  var Medication = sequelize.define("Medication", {
    GenericName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    BrandName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Class: {
      type: DataTypes.TEXT,
      aloowNull: false,
      validate: {
        len: [1]
      }
    },
    Uses: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    SideEffects: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Rationale: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    DCPlan: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Withdrawal: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  Medication.associate = function(models) {
    Medication.belongsTo(models.Admin, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Medication;
};
