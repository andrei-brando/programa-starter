import { ProjectEntity } from "../../../../core/infra";
import { Project } from "../../domain/models";

export class ProjectRepository {
  public async create(params: Project): Promise<Project> {
    const { name, description, startAt, finishAt, userUid } = params;

    const project = await ProjectEntity.create({
      name,
      description,
      startAt,
      finishAt,
      userUid,
    }).save();

    return Object.assign({}, params, project);
  }
}