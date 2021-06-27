import { Router } from 'express';
import StocksController from '../controllers/StocksController';

export default class CategorieRoutes {
  public init(): Router {
    const routes = Router();
    const controller = new StocksController();

    routes.get('/stocks', controller.index);
    routes.get('/stocks/:uid', controller.show);
    routes.post('/stocks', controller.store);
    routes.put('/stocks/:uid', controller.update);
    routes.delete('/stocks/:uid', controller.delete);

    return routes;
  }
}