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
    router.post('/tasks',
      routerMvcAdapter(makeController(), EMVC.STORE));
  }
}