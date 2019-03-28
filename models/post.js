module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("post", {
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    Post.associate = function (models) {
        Post.belongsTo(models.bar, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Post;
};