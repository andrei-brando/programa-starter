import { badRequest, InvalidParamError, ok } from "../../../../core/presentation";
import { HttpRequest, HttpResponse } from "../../../../core/presentation";
import { Project } from "../../domain/models";
import { UserRepository } from "../../infra";


export class UserExistsMiddleware {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const body: Project = request.body;

    const user = await new UserRepository().getOne(body.userUid);

    if (!user) return badRequest(new InvalidParamError('userUid'));

    return ok({});
  }
}