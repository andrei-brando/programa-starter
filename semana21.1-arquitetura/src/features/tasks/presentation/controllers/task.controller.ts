import { HttpRequest, HttpResponse, MVCController, ok, serverError } from "../../../projects/presentation";
import { TaskRepository } from "../../infra";

export class TaskController implements MVCController {
  readonly #repository: TaskRepository;

  constructor(repository: TaskRepository) {
    this.#repository = repository;
  }

  public async index(request: HttpRequest): Promise<HttpResponse> {
    try {
      const tasks = await this.#repository.findAll();

      return ok(tasks);
    } catch (error) {
      return serverError();
    }
  }

  public async show(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;

    try {
      const task = await this.#repository.findOne(uid);

      return ok(task);
    } catch (error) {
      return serverError();
    }
  }

  public async store(request: HttpRequest): Promise<HttpResponse> {
    try {
      const task = await this.#repository.create(request.body)

      return ok(task);
    } catch (error) {
      return serverError();
    }
  }

  public async update(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;

    try {
      await this.#repository.update(uid, request.body);

      return ok(null);
    } catch (error) {
      return serverError();
    }
  }

  public async delete(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;

    try {
      await this.#repository.delete(uid);

      return ok(null);
    } catch (error) {
      return serverError();
    }
  }
}