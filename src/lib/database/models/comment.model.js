
export default (sequelize, DataTypes) => {
    const Comment = sequelize.define("Comment", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        content:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {
        timestamps: true,
        tableName: "comments"
    });

    Comment.associate = (models) => {
        comment.belongsTo(models.Post, {
            foreignKey: "postId",
        });
    };
    Comment.associate = (models) => {
        comment.belongsTo(models.Comment, {
            foreignKey: "id",
        });
    };

    return Comment;
};