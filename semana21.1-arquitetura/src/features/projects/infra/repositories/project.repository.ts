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

  public async getAll(): Promise<Project[]> {
    const projects = await ProjectEntity.find();

    return projects.map(project => ({
      uid: project.uid,
      name: project.name,
      description: project.description,
      startAt: project.startAt,
      finishAt: project.finishAt,
      userUid: project.userUid,
    }));
  }

  public async getOne(uid: string): Promise<Project | null> {
    const project = await ProjectEntity.findOne(uid);

    if (!project) return null;

    return {
      uid: project.uid,
      name: project.name,
      description: project.description,
      startAt: project.startAt,
      finishAt: project.finishAt,
      userUid: project.userUid,
    }
  }
}