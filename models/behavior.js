module.exports = function(sequelize, DataTypes) {
    const Behavior = sequelize.define("Behavior", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
          },
        behavior: {
            type: DataTypes.STRING,
            allowNull: false
        },
        goalMet: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        goalTracked: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        average: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }
    });

        Behavior.associate = function(models) {
            // We're saying that Behavior should belong to an student
            // A behavior entry can't be created without a student due to the foreign key constraint
            Behavior.belongsTo(models.Students, {
                foreignKey: {
                allowNull: false
                }
            });
        };
    
        Behavior.associate = function(models) {
            // Associating Students with Behavior
            Behavior.hasMany(models.Behavdata, {
            });
          };

    return Behavior;
};
