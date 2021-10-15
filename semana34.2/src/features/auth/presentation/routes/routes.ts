import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

export default class AuthRoutes {
  public init(): Router {
    const routes = Router();
    const controller = new AuthController();

    routes.post('/auth', controller.store);

    return routes;
  }
}
