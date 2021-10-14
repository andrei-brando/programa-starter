import { Router } from "express";
import UserRepository from "../../infra/repositories/user.repository";

import UserController from "../controllers/user.controller";

export default class UserRoutes {
  private resource = "users";

  public init(): Router {
    const routes = Router();
    const controller = new UserController();

    routes.get(
      `/users`,
      controller.index
      /**
        #swagger.tags = ['Users]
        #swagger.description = 'Listar Usuários'
        #swagger.security = [{Bearer: []}]
        #swagger.parameters['nome'] = {
           in: 'body',
           description: 'Nome do usuário',
           required: false,
           type: 'string'
        }
        #swagger.responses[200] = {
           description: 'Caso de sucesso',
           schema: { $ref: '#/definitions/User' }
        }
      */
    );

    routes.get(
      `/users/:id`,
      controller.show
      /**
       * #swagger.tags = ['Users]
       */
    );

    routes.post(
      `/users`,
      controller.store
      /**
       * #swagger.tags = ['Users]
       */
    );

    return routes;
  }
}
