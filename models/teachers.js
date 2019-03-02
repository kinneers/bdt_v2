module.exports = function(sequelize, DataTypes) {
    const Teachers = sequelize.define("Teachers", {
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
            unique: true
          },
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

  Teachers.associate = function(models) {
    // Associating Teachers with Students
    // When an Author is deleted, also delete any associated Posts
//    Teachers.hasMany(models.Students, {
//    console.log("$$$$$$$$$$$$$ " , models.Students);
    models.Teachers.belongsToMany(models.Students, {
      through: "Teacherstudents",
      as: "Students", 
      foreignkey: "studentId"
    });
  };

  return Teachers;
};