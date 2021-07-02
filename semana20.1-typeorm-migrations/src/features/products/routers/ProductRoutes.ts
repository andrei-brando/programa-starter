import { Router } from 'express';
import ProductController from '../controllers/ProductsController';

export default class ProductRoutes {
  public init(): Router {
    const routes = Router();
    const controller = new ProductController();

    routes.get('/product', controller.index);
    routes.get('/product/:uid', controller.show);
    routes.post('/product', controller.store);
    routes.put('/product/:uid', controller.update);
    routes.delete('/product/:uid', controller.delete);

    return routes;
  }
}