// import { Sequelize, DataTypes } from "sequelize";
// import sequelize from "../connection.js";

// const modelPaths = [
//   "./user.model.js",
//   "./profile.model.js",
//   "./userType.model.js",
//   "./posts.model.js",
//   "./tags.model.js",
//   "./category.model.js",
//   "./postType.model.js"
// ];

// const db = {};

// async function initializeModels() {
//   for (const path of modelPaths) {
//     const module = await import(path);
//     const defineModel = module.default;
//     const model = defineModel(sequelize, DataTypes);
//     db[model.name] = model;
//   }

//   // Setup associations
//   Object.keys(db).forEach((modelName) => {
//     if (db[modelName].associate) {
//       db[modelName].associate(db);
//     }
//   });

//   db.sequelize = sequelize;
//   db.Sequelize = Sequelize;

//   return db;
// }

// export default await initializeModels(); // only works in top-level-await environments (Node >=14.8+, or Next.js API/server components)


import { Sequelize, DataTypes } from "sequelize";
import  sequelize  from "../connection.js";


const modelDefiners = [
  require("./user.model.js").default,
  require("./profile.model.js").default,
  require("./userType.model.js").default,
  require("./posts.model.js").default,
  require("./tags.model.js").default,
  require("./category.model.js").default,
  require("./postType.model.js").default,
  require("./meta.model.js").default
];

// Initialize models
const db = {};
for (const defineModel of modelDefiners) {
  const model = defineModel(sequelize, DataTypes);
  db[model.name] = model;
}

// Setup associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;