import { Router } from 'express';
import { EMVC, routerMvcAdapter } from '../../../../core/presentation';
import { middlewareAdapter, routerAdapter } from '../../../../core/presentation';
import { ProjectController } from '../controllers';
import { ProjectMiddleware } from '../middlewares';
import { MVCController } from '../../../../core/presentation';
import { ProjectRepository } from '../../infra';

const makeController = (): MVCController => {
  const repository = new ProjectRepository();
  return new ProjectController(repository);
}

export default class ProjectRoutes {
  public init(routes: Router) {
    routes.get(
      '/projects',
      middlewareAdapter(new ProjectMiddleware()),
      routerMvcAdapter(makeController(), EMVC.INDEX),
    );
    routes.get(
      '/projects/:uid',
      middlewareAdapter(new ProjectMiddleware()),
      routerMvcAdapter(makeController(), EMVC.SHOW),
    );
    routes.post(
      '/projects',
      middlewareAdapter(new ProjectMiddleware()),
      routerMvcAdapter(makeController(), EMVC.STORE),
    );
  }
}