
export default (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        validate: {
          isUUID: 4,
        },
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: true,
        validate: {
          notEmpty: true,
          len: [5, 150],
        },
      },
      slug: {
        type: DataTypes.STRING(150),
        allowNull: true,
        unique: true,
        validate: {
          notEmpty: true,
          is: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i, // kebab-case validation
        },
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    }, {
      paranoid: true, // enables soft deletes
      timestamps: true, // createdAt and updatedAt auto-handled
      tableName: "categories",
    });

    Category.associate = (models) => {
        Category.hasMany(
            models.Category, 
            { 
                allowNull: true,
                foreignKey: "categoryId",
                onDelete: "CASCADE",
            }
        )

        Category.belongsToMany(
            models.Post, 
            { 
                through: "post_categories",
                foreignKey: "categoryId",
                otherKey: "postId",
                onDelete: "CASCADE",
            }
        )
    }
    return Category;
  }
  