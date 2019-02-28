module.exports = function(sequelize, DataTypes) {
    const Students = sequelize.define("Students", {
        userName: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true,
            validate: {
              len: {
                  args: [1, 10],
                  msg: "Username exceeds 10 characters"
              }
            }
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
              len: {
                  args: [1, 50],
                  msg: "First name exceeds 50 characters"
              }
            }
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
              len: {
                  args: [1, 50],
                  msg: "Last name exceeds 50 characters"
              }
            }
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }
  });

  Students.associate = function(models) {
      // We're saying that a Student should belong to an teacher
      // A Student can't be created without an teacher due to the foreign key constraint
      Students.belongsTo(models.Teachers, {
        foreignKey: {
          allowNull: false
        }
      });
    };

  return Students;
};