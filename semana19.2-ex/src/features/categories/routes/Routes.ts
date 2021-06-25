import { Router } from 'express';
import CategorieController from '../controllers/CategorieController';

export default class CategorieRoutes {
  public init(): Router {
    const routes = Router();
    const controller = new CategorieController();

    routes.get('/categories', controller.index);
    routes.get('/categories/:uid', controller.show);
    routes.post('/categories', controller.store);
    routes.put('/categories/:uid', controller.update);
    routes.delete('/categories/:uid', controller.delete);

    return routes;
  }
}