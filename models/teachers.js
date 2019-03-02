module.exports = function(sequelize, DataTypes) {
    const Teachers = sequelize.define("Teachers", {
        userName: {
          type: DataTypes.STRING(10),
          allowNull: false,
          primaryKey: true,
          unique: true,
        },
        firstName: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
      },
        updatedAt: {
          type: DataTypes.DATE,
      }
  });

  Teachers.associate = function(models) {
    // Associating Teachers with Students
    // When an Author is deleted, also delete any associated Posts
    Teachers.hasMany(models.Students, {
    });
  };

  Teachers.associate = function(models) {
    // We're saying that a Teacher should belong to an userName
    // A Teacher can't be created without an userName due to the foreign key constraint
    Teachers.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
  });
};

  return Teachers;
};