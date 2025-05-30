import mysql2 from 'mysql2'; // Explicit import



export const development = {
  DATABASE: {
    MYSQL: {
       database: 'cynoteck_test',
       username: 'root',
       password: 'Cyno@123#45',
       host: '192.168.5.5',
       port: 3307,
       dialect: 'mysql',
       dialectModule: mysql2,
    },
  },

  USER: {
    MYSQL: {
      dbname:   process.env.DB_NAME || 'cynoteck_test',
      user: process.env.DB_USER ||  'root',
      password: process.env.DB_PASSWORD || '',
    },
  },
};

