export const categorySchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      summary: "Id da categoria",
    },
    name: {
      type: "string",
      summary: "Nome da categoria",
    },
  },
};

export const categoriesSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: {
        type: "number",
        summary: "Id da categoria",
      },
      name: {
        type: "string",
        summary: "Nome da categoria",
      },
    },
  },
};
