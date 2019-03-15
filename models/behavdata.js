module.exports = function(sequelize, DataTypes) {
    const Behavdata = sequelize.define("behavdata", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        behavDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        behavior_time01: {
            type: DataTypes.TIME
        },
        behavior_score01: {
            type: DataTypes.INTEGER
        },
        behavior_time02: {
            type: DataTypes.TIME
        },
        behavior_score02: {
            type: DataTypes.INTEGER
        },
        behavior_time03: {
            type: DataTypes.TIME
        },
        behavior_score03: {
            type: DataTypes.INTEGER
        },
        behavior_time04: {
            type: DataTypes.TIME
        },
        behavior_score04: {
            type: DataTypes.INTEGER
        },
        behavior_time05: {
            type: DataTypes.TIME
        },
        behavior_score05: {
            type: DataTypes.INTEGER
        },
        behavior_time06: {
            type: DataTypes.TIME
        },
        behavior_score06: {
            type: DataTypes.INTEGER
        },
        behavior_time07: {
            type: DataTypes.TIME
        },
        behavior_score07: {
            type: DataTypes.INTEGER
        },
        behavior_time08: {
            type: DataTypes.TIME
        },
        behavior_score08: {
            type: DataTypes.INTEGER
        },
        behavior_time09: {
            type: DataTypes.TIME
        },
        behavior_score09: {
            type: DataTypes.INTEGER
        },
        behavior_time10: {
            type: DataTypes.TIME
        },
        behavior_score10: {
            type: DataTypes.INTEGER
        },
        behavior_time11: {
            type: DataTypes.TIME
        },
        behavior_score11: {
            type: DataTypes.INTEGER
        },
        behavior_time12: {
            type: DataTypes.TIME
        },
        behavior_score12: {
            type: DataTypes.INTEGER
        },
        behavior_time13: {
            type: DataTypes.TIME
        },
        behavior_score13: {
            type: DataTypes.INTEGER
        },
        behavior_time14: {
            type: DataTypes.TIME
        },
        behavior_score14: {
            type: DataTypes.INTEGER
        },
        behavior_time15: {
            type: DataTypes.TIME
        },
        behavior_score15: {
            type: DataTypes.INTEGER
        },
        behavior_time16: {
            type: DataTypes.TIME
        },
        behavior_score16: {
            type: DataTypes.INTEGER
        },
        behavior_time17: {
            type: DataTypes.TIME
        },
        behavior_score17: {
            type: DataTypes.INTEGER
        },
        behavior_time18: {
            type: DataTypes.TIME
        },
        behavior_score18: {
            type: DataTypes.INTEGER
        },
        behavior_time19: {
            type: DataTypes.TIME
        },
        behavior_score19: {
            type: DataTypes.INTEGER
        },
        behavior_time20: {
            type: DataTypes.TIME
        },
        behavior_score20: {
            type: DataTypes.INTEGER
        },
        behavior_time21: {
            type: DataTypes.TIME
        },
        behavior_score21: {
            type: DataTypes.INTEGER
        },
        behavior_time22: {
            type: DataTypes.TIME
        },
        behavior_score22: {
            type: DataTypes.INTEGER
        },
        behavior_time23: {
            type: DataTypes.TIME
        },
        behavior_score23: {
            type: DataTypes.INTEGER
        },
        behavior_time24: {
            type: DataTypes.TIME
        },
        behavior_score24: {
            type: DataTypes.INTEGER
        },
        behavior_time25: {
            type: DataTypes.TIME
        },
        behavior_score25: {
            type: DataTypes.INTEGER
        },
        behavior_time26: {
            type: DataTypes.TIME
        },
        behavior_score26: {
            type: DataTypes.INTEGER
        },
        behavior_time27: {
            type: DataTypes.TIME
        },
        behavior_score27: {
            type: DataTypes.INTEGER
        },
        behavior_time28: {
            type: DataTypes.TIME
        },
        behavior_score28: {
            type: DataTypes.INTEGER
        },
        behavior_time29: {
            type: DataTypes.TIME
        },
        behavior_score29: {
            type: DataTypes.INTEGER
        },
        behavior_time30: {
            type: DataTypes.TIME
        },
        behavior_score30: {
            type: DataTypes.INTEGER
        },
        behavior_time31: {
            type: DataTypes.TIME
        },
        behavior_score31: {
            type: DataTypes.INTEGER
        },
        behavior_time32: {
            type: DataTypes.TIME
        },
        behavior_score32: {
            type: DataTypes.INTEGER
        }
    });

    Behavdata.associate = function(models) {
        Behavdata.belongsTo(models.Behavior, {
            foreignKey: {
            allowNull: false
            }
        });
    };
    
    return Behavdata;
};