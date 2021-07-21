import { DataNotFoundError } from "../../../../core/presentation";
import { HttpRequest, HttpResponse } from "../../../../core/presentation";
import { notFound, ok, serverError } from "../../../../core/presentation";
import { MVCController } from "../../../../core/presentation";
import { ProjectRepository } from "../../infra";

export class ProjectController implements MVCController {
  readonly #repository: ProjectRepository;

  constructor(repository: ProjectRepository) {
    this.#repository = repository;
  }

  public async index(request: HttpRequest): Promise<HttpResponse> {
    try {
      const projects = await this.#repository.getAll();

      return ok(projects);
    } catch (error) {
      return serverError();
    }
  }

  public async show(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;

    try {
      const project = await this.#repository.getOne(uid);

      if (!project) return notFound();

      return ok(project);
    } catch (error) {
      return serverError();
    }
  }

  public async store(request: HttpRequest): Promise<HttpResponse> {
    try {
      const project = await this.#repository.create(request.body);

      return ok(project);
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