import tab from "daisyui/components/tab";

export default (sequelize, DataTypes) => {
  const Tag = sequelize.define("Tag", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        notEmpty: true,
        is: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
      },
    },
  }, {
    indexes: [
      {
        unique: true,
        fields: ['slug', 'name'], 
      },
    ],
    tableName: "tags",
  });

  Tag.associate = (models) => {
    Tag.belongsToMany(models.Post, 
      { through: "post_tags", 
        foreignKey: "tagId",
        otherKey : "postId"
      });
  };

  return Tag;
};
