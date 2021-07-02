import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';

export default class CategoryRoutes {
  public init(): Router {
    const routes = Router();
    const controller = new CategoryController();

    routes.get('/category', controller.index);
    routes.get('/category/:uid', controller.show);
    routes.post('/category', controller.store);
    routes.put('/category/:uid', controller.update);
    routes.delete('/category/:uid', controller.delete);

    return routes;
  }
}