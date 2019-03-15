module.exports = function(sequelize, DataTypes) {
    const Teacherstudent = sequelize.define("teacherstudent", {
        teacherId: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        studentId: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true
        }    
    });        
        


        return Teacherstudent;
    };