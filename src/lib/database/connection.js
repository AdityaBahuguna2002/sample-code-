import { Sequelize } from 'sequelize';
import config from "@/config/main/index.js";
import mysql2 from 'mysql2'; 


const dbConfig = {
 ...config.DATABASE.MYSQL,
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  dialectModule: dbConfig.dialectModule,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: process.env.NODE_ENV === 'development' ? console.log : false
});

export async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established');
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
}

export default sequelize;
