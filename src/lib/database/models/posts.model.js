export default (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        validate: {
          isUUID: 4,
        },
      },

      title: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
          notEmpty: { msg: "Title is required" },
          len: { args: [5, 200], msg: "Title must be between 5 and 200 characters" },
        },
      },

      slug: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: "Slug is required" },
          is: {
            args: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
            msg: "Slug must be in kebab-case (lowercase-words-separated-by-dashes)",
          },
        },
      },

      description: {
        type: DataTypes.STRING(20000),
        allowNull: false,
        validate: {
          notEmpty: { msg: "Description is required" },
        },
      },

      tableOfContent: {
        type: DataTypes.JSON,
        allowNull: true,
      },

      content: {
        type: DataTypes.TEXT("long"),
        allowNull: true,
        validate: {
          notEmpty: { msg: "Content is required" },
        },
      },


      featuredImage: {
        type: DataTypes.STRING(500),
        allowNull: true,
        validate: {
          isValidUrl(value) {
            const urlPattern = /^(http:\/\/localhost:\d+|https?:\/\/[\w.-]+)(:\d+)?(\/.*)?$/;
            if (value && !urlPattern.test(value)) {
              throw new Error("Featured image must be a valid URL (localhost allowed)");
            }
          },
        },
      },
      
      status: {
        type: DataTypes.ENUM("draft", "published"),
        allowNull: false,
        defaultValue: "draft",
        validate: {
          isIn: {
            args: [["draft", "published"]],
            msg: "Status must be either 'draft' or 'published'",
          },
        },
      },

      actualPublishedDate : {
        type: DataTypes.DATE,
        allowNull : true,
      },

      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }

    },

    {
      paranoid: true, // soft delete (adds deletedAt)
      timestamps: true, // createdAt and updatedAt
      tableName: "posts",
    }
  );

  Post.associate = (models) => {
    // Post belongs to a User (author)
    Post.belongsTo(models.User, {
      foreignKey: "userId",
      as: "author",
      onDelete: "CASCADE",
    });

    // Post has many Tags (many-to-many)
    Post.belongsToMany(models.Tag, {
      through: "post_tags",
      foreignKey: "postId",
      otherKey: "tagId",
      onDelete: "CASCADE",
    });

    // Post has many Categories (many-to-many)
    Post.belongsToMany(models.Category, {
      through: "post_categories",
      foreignKey: "postId",
      otherKey: "categoryId",
      onDelete: "CASCADE",
    });

    // Post has one Meta (one-to-one)
    Post.hasOne(models.Meta, {
      foreignKey: "postId",
      as: "meta",
      onDelete: "CASCADE",
    });

    Post.belongsTo(models.PostType, { foreignKey: "postTypeId" });
  };

  return Post;
};
