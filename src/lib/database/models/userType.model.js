export default (sequelize, DataTypes) => 
  {
    const UserType = sequelize.define(
    "UserType", 
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      role: {
        type: DataTypes.ENUM("editor", "author"),
        allowNull: false,
        defaultValue: "editor", 
      },
    }, 
    {
      timestamps: true ,
      tableName: "user_types"
    }
  );
  
    UserType.associate = (models) => {
      UserType.hasMany(models.User, { foreignKey: "userTypeId" });
    };
  
    return UserType;
  };