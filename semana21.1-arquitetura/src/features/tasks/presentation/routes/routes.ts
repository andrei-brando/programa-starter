import { Router } from "express";
import { EMVC, MVCController, routerMvcAdapter } from "../../../projects/presentation";
import { TaskRepository } from "../../infra";
import { TaskController } from "../controllers";

const makeController = (): MVCController => {
  const repository = new TaskRepository();
  return new TaskController(repository);
}
export default class TaskRoutes {
  public init(router: Router) {
    router.get('/tasks',
      routerMvcAdapter(makeController(), EMVC.INDEX));

    router.get('/tasks/:uid',
      routerMvcAdapter(makeController(), EMVC.SHOW));

    router.post('/tasks',
      routerMvcAdapter(makeController(), EMVC.STORE));

    router.put('/tasks/:uid',
      routerMvcAdapter(makeController(), EMVC.UPDATE));

    router.delete('/tasks/:uid',
      routerMvcAdapter(makeController(), EMVC.DELETE));
  }
}