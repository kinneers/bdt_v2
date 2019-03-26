module.exports = function(sequelize, DataTypes) {
    const Admins = sequelize.define("admins", {
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
            unique: true
          },
        //Refers to whether the user is currently active in the database
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
          },
          createdAt: {
              type: DataTypes.DATE
          },
          updatedAt: {
              type: DataTypes.DATE
        },
        //For authentication
        last_login: {
          type: DataTypes.DATE
        },
        //Refers to whether the user is active in a session
        status: {
          type: DataTypes.ENUM('active', 'inactive'),
          defaultValue: 'active'
        }
    });
  
    return Admins;
  };