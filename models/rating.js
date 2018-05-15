module.exports = function(sequelize, DataTypes){
    var Ratings = sequelize.define("Ratings", {
        location: {
            type: DataTypes.TEXT
        },
        stars: {
            type: DataTypes.FLOAT
        },
        comment: {
            type: DataTypes.TEXT
        },
        image: {
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
    return Ratings;
}