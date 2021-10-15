export const userSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      summary: 'Nome do usuário',
    },
    email: {
      type: 'string',
      summary: 'Email do usuário',
    },
  },
};
