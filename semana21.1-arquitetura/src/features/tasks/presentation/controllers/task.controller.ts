import { HttpRequest, HttpResponse, MVCController, ok, serverError } from "../../../projects/presentation";
import { TaskRepository } from "../../infra";

export class TaskController implements MVCController {
  readonly #repository: TaskRepository;

  constructor(repository: TaskRepository) {
    this.#repository = repository;
  }

  public async index(request: HttpRequest): Promise<HttpResponse> {
    throw new Error("Method not implemented.");
  }

  public async show(request: HttpRequest): Promise<HttpResponse> {
    throw new Error("Method not implemented.");
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
    throw new Error("Method not implemented.");
  }

  public async delete(request: HttpRequest): Promise<HttpResponse> {
    throw new Error("Method not implemented.");
  }
}