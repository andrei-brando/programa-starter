import { userPath, usersPath } from "./docs/users.path";
import { categoryPath } from "./docs/category.path";
import { userSchema } from "./schemas/user.schema";
import { categorySchema, categoriesSchema } from "./schemas/category.schema";

export default {
  info: {
    title: "Aula 14/10",
    description: "Como documentar uma API",
    version: "1.5.0",
  },
  openapi: "3.0.0",
  servers: [
    {
      url: "/",
    },
  ],
  paths: {
    "/user": usersPath,
    "/user/{id}": userPath,
    "/category/{id}": categoryPath,
  },
  schemas: {
    user: userSchema,
    category: categorySchema,
    categories: categoriesSchema,
  },
};
