import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

export default class Routes {
    public init(routes: Router): Router {
        const controller = new AuthController();

        routes.post('/auth', controller.store);

        return routes;
    }
}