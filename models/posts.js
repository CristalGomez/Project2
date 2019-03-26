module.exports = function (sequelize, DataTypes) {
        var Bars = sequelize.define("bar", {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isUrl: true
                }
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });

        var Post = sequelize.define("post", {
                body: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                    validate: {
                        len: [1]
                    }
                }
            });
            return Bars, Post;
        };
