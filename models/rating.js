module.exports = function(sequelize, DataTypes){
    var Rating = sequelize.define("Rating", {
        location: {
            type: DataTypes.TEXT
        },
        stars: {
            type: DataTypes.FLOAT
        },
        comment: {
            type: DataTypes.TEXT
        },
        createdAt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });
    return Rating;
}