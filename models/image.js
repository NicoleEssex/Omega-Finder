module.exports = function(sequelize, DataTypes){
    var image = sequelize.define("image", {
        location: {
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
    return image;
}