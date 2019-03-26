module.exports = function(sequelize, DataTypes) {
    const Behavdata = sequelize.define("behavdata", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        behavInfo: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        },
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