export default (sequelize, DataTypes) => {
    const PostType = sequelize.define("PostType", {
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
      onDELETE: "CASCADE",
      tableName: "post_types"
    });
  
    PostType.associate = (models) => {
      PostType.hasMany(models.Post, 
        { 
          foreignKey: "postTypeId",
          onDelete: "CASCADE",
        }
      );

      PostType.hasMany(models.Category, 
        { 
          foreignKey: "postTypeId",
          onDelete: "CASCADE",
        }
      );

      PostType.hasMany(models.Tag, 
        { 
          foreignKey: "postTypeId",
          onDelete: "CASCADE",
        }
      );
    }
  
    return PostType;
  }
  