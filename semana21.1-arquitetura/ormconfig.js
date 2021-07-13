require('dotenv').config();

module.exports = {
  type: process.env.DIALECT,
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  entities: [
    'src/core/data/database/entities/**/*',
  ],
  migrations: [
    'src/core/data/database/migrations/**/*',
  ],
  cli: {
    entitiesDir: 'src/core/data/database/entities',
    migrationsDir: 'src/core/data/database/migrations',
  },
  extra: {
    ssl: {
      rejectUnauthorized: false,
    }
  }
}