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
        createdAt: DataTypes.DATE,
             
        updatedAt: DataTypes.DATE
    });
    return Ratings;
}