import { Router } from 'express';
import UserController from '../controllers/user.controller';
import authMiddleware from '../../../auth/presentation/middlewares/auth.middleware';

export default class UserRoutes {
  private resource = 'users';

  public init(): Router {
    const routes = Router();
    const controller = new UserController();

    routes.get(`/${this.resource}`, authMiddleware, controller.index);

    routes.get(`/${this.resource}/:id`, authMiddleware, controller.show);

    routes.post(`/${this.resource}`, authMiddleware, controller.store);

    return routes;
  }
}
