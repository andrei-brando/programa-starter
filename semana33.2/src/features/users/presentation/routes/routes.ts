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
       * #swagger.tags = ['Users]
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
