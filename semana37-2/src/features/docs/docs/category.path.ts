export const categoryPath = {
  get: {
    tags: ["Categories"],
    summary: "Buscar uma categoria",
    parameters: [
      {
        name: "id",
        in: "path",
        description: "ID da categoria",
        required: true,
        type: "number",
      },
    ],
    responses: {
      200: {
        description: "Retorna uma categoria",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/category",
            },
          },
        },
      },
      400: {
        description: "Retorna um erro 400",
        content: {
          "application/json": {
            schema: {
              message: "ID Inválido",
            },
          },
        },
      },
      401: {
        description: "Retorna um erro 401",
        content: {
          "application/json": {
            schema: {
              message: "Usuário não está logado",
            },
          },
        },
      },
      500: {
        description: "Retorna um erro 500",
        content: {
          "application/json": {
            schema: {
              message: "Ocorreu um erro, tente novamente mais tarde",
            },
          },
        },
      },
    },
  },
};

export const categoriesPath = {
  get: {
    tags: ["Categories"],
    summary: "Buscar uma lista de categoria",
    parameters: [],
    responses: {
      200: {
        description: "Retorna uma categoria",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/categories",
            },
          },
        },
      },
      400: {
        description: "Retorna um erro 400",
        content: {
          "application/json": {
            schema: {
              message: "ID Inválido",
            },
          },
        },
      },
      401: {
        description: "Retorna um erro 401",
        content: {
          "application/json": {
            schema: {
              message: "Usuário não está logado",
            },
          },
        },
      },
      500: {
        description: "Retorna um erro 500",
        content: {
          "application/json": {
            schema: {
              message: "Ocorreu um erro, tente novamente mais tarde",
            },
          },
        },
      },
    },
  },
};
