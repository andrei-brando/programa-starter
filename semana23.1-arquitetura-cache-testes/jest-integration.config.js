const config = require('./jest.config');

// define apenas os testes unitários
config.testMatch = ['**/*.test.ts'];

module.exports = config;