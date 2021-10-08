const { User } = require('./documentation/User')

module.exports = {
  info: {
    version: '1.0.0',
    title: 'Aula Swagger',
    description: 'Aula de documentação de API - 07/10/2021'
  },
  host: 'localhost:8080',
  schemas: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    JWT: {
      description: 'JWT token',
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
    }
  },
  definitions: {
    User,
    usersList: [
      { $ref: '#/definitions/User' }
    ]
  }
}