import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

export default class Routes {
  public init(): Router {
    const routes = Router();
    const controller = new AlunoController();

    routes.get('/alunos', controller.index);
    routes.get('/alunos/:id', controller.show);
    routes.post('/alunos', controller.store);
    routes.put('/alunos/:id', controller.update);
    routes.delete('/alunos/:id', controller.delete);

    return routes;
  }
}