
module.exports = {
  development: {
    username: 'root',
    password: "Cyno@123#45",
    database: 'cynoteck_test',
    host: '192.168.5.5',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: "Cyno@123#45",
    database: 'cynoteck_test',
    host: '13.234.115.122',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
