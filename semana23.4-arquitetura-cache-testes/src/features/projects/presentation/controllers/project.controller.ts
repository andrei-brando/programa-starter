import { badRequest, HttpRequest, HttpResponse, InvalidParamError } from '../../../../core/presentation';
import { notFound, ok, serverError } from '../../../../core/presentation';
import { MVCController } from '../../../../core/presentation';
import { ProjectRepository } from '../../infra';
import { CacheRepository } from '../../infra';
import { UserEntity } from '../../infra';

export class ProjectController implements MVCController {
  readonly #repository: ProjectRepository;
  readonly #cache: CacheRepository;

  constructor(repository: ProjectRepository, cache: CacheRepository) {
    this.#repository = repository;
    this.#cache = cache;
  }

  public async index(): Promise<HttpResponse> {
    try {
      const cache = await this.#cache.get('project:all');

      if (cache) {
        return ok(cache);
      }

      const projects = await this.#repository.getAll();

      if (!projects || projects.length <= 0) return notFound();

      await this.#cache.set('project:all', projects);

      return ok(projects);
    } catch (error) {
      return serverError();
    }
  }

  public async show(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;
    try {
      const cache = await this.#cache.get(`project:${uid}`);

      if (cache) {
        return ok(cache);
      }

      const project = await this.#repository.getOne(uid);
      await this.#cache.set(`project:${uid}`, project);

      if (!project) {
        return notFound();
      }

      return ok(project);
    } catch (error) {
      return serverError();
    }
  }

  public async store(request: HttpRequest): Promise<HttpResponse> {
    try {
      const project = await this.#repository.create(request.body);

      await this.#cache.set(`project:${project.uid}`, project);
      await this.#cache.delete('project:all');

      return ok(project);
    } catch (error) {
      return serverError();
    }
  }

  public async update(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;

    try {
      const result = await this.#repository.update(uid, request.body);

      await this.#cache.set(`projects:${uid}`, result);

      return ok(result);
    } catch (error) {
      return serverError();
    }
  }

  public async delete(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;

    try {
      await this.#repository.delete(uid);
      await this.#cache.delete(`projects:${uid}`);

      return ok(null);
    } catch (error) {
      return serverError();
    }
  }
}