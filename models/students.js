module.exports = function(sequelize, DataTypes) {
    const Students = sequelize.define("Students", {
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

    Students.associate = function(models) {
        // We're saying that a Student should belong to an teacher
        // A Student can't be created without an teacher due to the foreign key constraint
        Students.belongsToMany(models.Teachers, {
            through: models.teacherstudents,
            as: "Teachers", 
            foreignkey: "teacherId"
          });
        };
      
    Students.associate = function(models) {
        // Associating Students with Behavior
        Students.hasMany(models.Behavior, {
        });
      };

  return Students;
};