export default (sequelize, DataTypes) => {
  const Profile = sequelize.define("Profile", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    bio: DataTypes.TEXT,
    avatarUrl: DataTypes.STRING,
  });

  Profile.associate = (models) => {
    Profile.belongsTo(models.User, { foreignKey: "userId" });
  };

  return Profile;
};
