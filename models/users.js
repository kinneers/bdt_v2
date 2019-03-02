module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define("Users", {
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
        authLevel: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
              len: {
                  args: [1, 20],
                  msg: "Authorization Level exceeds 20 characters"
              }
            }
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
              isEmail: {
                msg: "Not a valid email address"
              }
              //,
              // isUnique: connection.validateIsUnique(
              //   "email",
              //   "This email address already exists"
              // )
            }
          },
        role: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
              len: {
                  args: [1, 20],
                  msg: "Role exceeds 20 characters"
              }
            }
        },
        //Refers to whether the user is currently active in the database
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
        },
        //For authentication
        last_login: {
          type: DataTypes.DATE
        },
        //Refers to whether the user is active in a session
        status: {
          type: DataTypes.ENUM('active', 'inactive'),
          defaultValue: 'active'
        },
    });
  
    Users.associate = function(models) {
      // Associating User with Teachers
      Users.hasMany(models.Teachers, {
      });
    };

    Users.associate = function(models) {
        // Associating User with Students
        Users.hasMany(models.Students, {
        });
      };
  
    return Users;
  };