module.exports = function(sequelize, DataTypes){
    var Image = sequelize.define("image", {
        location: {
            type: DataTypes.TEXT
        },
        image: {
            type: DataTypes.BLOB
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
    return Image;
}