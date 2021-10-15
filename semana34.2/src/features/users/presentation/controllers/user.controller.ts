import { Request, Response } from 'express';
import UserRepository from '../../infra/repositories/user.repository';

const repository = new UserRepository();

export default class UserController {
  public index(request: any, response: Response): Response {
    const { userId } = request;

    console.log(userId);

    const users = repository.getAll();

    return response.json(users);
  }

  public show(request: Request, response: Response): Response {
    const { id } = request.params;

    const user = repository.getOne(parseInt(id));

    return response.json(user);
  }

  public store(request: Request, response: Response): Response {
    const user = repository.save(request.body);

    return response.json(user);
  }
}
