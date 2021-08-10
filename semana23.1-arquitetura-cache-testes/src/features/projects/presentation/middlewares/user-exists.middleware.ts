import { badRequest, InvalidParamError, ok } from "../../../../core/presentation";
import { HttpRequest, HttpResponse } from "../../../../core/presentation";
import { UserEntity } from "../../../../core/infra";
import { Project } from "../../domain/models";

export class UserExistsMiddleware {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const body: Project = request.body;

    const user = await UserEntity.findOne(body.userUid);

    if (!user) return badRequest(new InvalidParamError('userUid'));

    return ok({});
  }
}