module.exports = function(sequelize, DataTypes) {
  var Medication = sequelize.define("Medication", {
    Generic_Name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Brand_Name: {
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
    Side_Effects: {
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
    DC_Plan: {
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
  Medication.associate = function (models) {
    Medication.belongsTo(models.Admin, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Medication;
};
