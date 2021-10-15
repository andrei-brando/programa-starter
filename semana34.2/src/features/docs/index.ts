import { userPath, usersPath } from './docs/users.path';
import { userSchema } from './schemas/user.schema';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Aula 14/10',
    description: 'Como documentadar uma API',
    version: '1.5.0',
  },
  servers: [
    {
      url: '/',
    },
  ],
  paths: {
    '/user': usersPath,
    '/user/{id}': userPath,
  },
  schemas: {
    user: userSchema,
  },
};
