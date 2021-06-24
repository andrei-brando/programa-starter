require('dotenv').config();

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  syncrhonize: false,
  logging: false,
  entities: [
    './src/core/data/database/entities/**/*'
  ],
  cli: {
    entitiesDir: './src/core/data/database/entities',
  }
  // extras: {
  //   ssl: false,
  // }
}