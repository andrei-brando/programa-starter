require('dotenv').config();

const config = {
    type: 'sqlite',
    database: './testdb.db',
    entities: [
        'src/core/infra/data/database/entities/**/*'
    ],
    migrations: [
        'src/core/infra/data/database/migrations/**/*'
    ],
}

module.exports = config;