module.exports = function(sequelize, DataTypes) {
    const Admins = sequelize.define("Admins", {
        userName: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
            unique: true,
            validate: {
              len: {
                  args: [1, 10],
                  msg: "Username exceeds 10 characters"
              }
            }
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false,
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
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
          },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
          },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }
    });
  
    return Admins;
  };