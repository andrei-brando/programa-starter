require('dotenv').config();

module.exports = {
  type: process.env.DB_DIALECT,
  url: process.env.DB_URL,
  synchronize: false,
  logging: false,
  entities: [
    './src/core/data/database/entities/**/*',
  ],
  cli: {
    entitiesDir: './src/core/data/database/entities',
    migrationsDir: './src/core/data/database/migrations',
  },
  migrations: [
    './src/core/data/database/migrations/**/*',
  ],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    }
  }
}