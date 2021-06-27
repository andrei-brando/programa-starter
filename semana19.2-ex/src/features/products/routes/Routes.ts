import { Router } from 'express';
import ProductController from '../controllers/ProductController';

export default class CategorieRoutes {
  public init(): Router {
    const routes = Router();
    const controller = new ProductController();

    routes.get('/products', controller.index);
    routes.get('/products/:uid', controller.show);
    routes.post('/products', controller.store);
    routes.put('/products/:uid', controller.update);
    routes.delete('/products/:uid', controller.delete);

    return routes;
  }
}