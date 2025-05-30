import db from './models/index.js';
const { sequelize } = db;

export async function syncDatabase() {
  try {
    const options = {
      // force: process.env.NODE_ENV === 'development', 
      // alter: process.env.NODE_ENV !== 'production'  
      alter : true
    };
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await sequelize.drop(); // or manually drop PostTag, Tag, etc
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    
    await sequelize.sync(options);
    console.log('Database tables synchronized');
    return true;
  } catch (error) {
    console.error('Database synchronization failed:', error);
    return false;
  }
}