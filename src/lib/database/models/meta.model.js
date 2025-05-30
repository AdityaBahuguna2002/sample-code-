
export default (sequelize, DataTypes) => {
    const Meta = sequelize.define("Meta", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [5, 150], 
        },
      },
      slug: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          is: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i, 
        },
      },
      description: {
        type: DataTypes.STRING(300),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [5, 300],
        },
      },
      keywords: {
        type: DataTypes.STRING(300),
        allowNull: true,
        validate: {
          len: [0, 300], // Comma-separated keywords
        },
      },
      ogTitle: {
        type: DataTypes.STRING(150),
        allowNull: true,
        validate: {
          len: [0, 150], // Open Graph title
        },
      },
      ogDescription: {
        type: DataTypes.STRING(300),
        allowNull: true,
        validate: {
          len: [0, 300], // Open Graph description
        },
      },
      ogImage: {
        type: DataTypes.STRING(500),
        allowNull: true,
        validate: {
          isUrl: true, // URL to image for Open Graph/Twitter
        },
      },
      twitterCard: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "summary_large_image",
        validate: {
          isIn: [["summary", "summary_large_image", "app", "player"]], // Twitter Card types
        },
      },
      twitterCreator: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
          len: [0, 50], // Twitter handle (e.g., @myhandle)
        },
      },
      noIndex: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Controls <meta name="robots" content="noindex">
      },
      noFollow: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Controls <meta name="robots" content="nofollow">
      },
      datePublished: {
        type: DataTypes.DATE,
        allowNull: true, // For ArticleJsonLd
      },
      dateModified: {
        type: DataTypes.DATE,
        allowNull: true, // For ArticleJsonLd
      },
      authorName: {
        type: DataTypes.STRING(100),
        allowNull: true, // For ArticleJsonLd
        validate: {
          len: [0, 100],
        },
      },
      publisherName: {
        type: DataTypes.STRING(100),
        allowNull: true, // For ArticleJsonLd
        validate: {
          len: [0, 100],
        },
      },
      publisherLogo: {
        type: DataTypes.STRING(500),
        allowNull: true,
        validate: {
          isUrl: true, // URL to publisher logo
        },
      },
      focusKeyword: {
        type: DataTypes.STRING(100),
        allowNull: true, // For content analysis (next-yoast-lite)
        validate: {
          len: [0, 100],
        },
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Active by default
      },
    },{
      timestamps: true,
      tableName: "metas" 
    });
  
    Meta.associate = function (models) {
      Meta.belongsTo(models.Post, { foreignKey: "postId" });
    };
  
    return Meta;
  };