const swaggerAutogen = require('swagger-autogen')();
const doc = require('./swagger.config');

const outputFile = './src/swagger_documentation.json';
const endpoints = [
  './src/features/users/presentation/routes/routes.ts',
];

swaggerAutogen(outputFile, endpoints, doc);