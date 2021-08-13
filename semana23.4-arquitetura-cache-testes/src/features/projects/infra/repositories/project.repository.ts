import { ProjectEntity } from '../../../../core/infra';
import { Project } from '../../domain';

interface ParamsCreate {
  name: string,
  description: string,
  startAt: string,
  finishAt: string,
  userUid: string
}

export class ProjectRepository {
  async create(params: ParamsCreate): Promise<Project> {
    const { name, description, startAt, finishAt, userUid } = params;
    const project = await ProjectEntity.create({
      name,
      description,
      startAt,
      finishAt,
      userUid
    }).save();

    return {
      uid: project.uid,
      name: project.name,
      description: project.description,
      startAt: project.startAt,
      finishAt: project.finishAt,
      userUid: project.userUid
    };
  }

  async getAll(): Promise<Project[]> {
    const projects = (await ProjectEntity.find())
      .map(project => ({
        uid: project.uid,
        name: project.name,
        description: project.description,
        startAt: project.startAt,
        finishAt: project.finishAt,
        userUid: project.userUid
      }));

    return projects;
  }

  async getOne(uid: string): Promise<Project | null> {
    const project = await ProjectEntity.findOne(uid);

    if (!project) return null;

    return {
      uid: project.uid,
      name: project.name,
      description: project.description,
      startAt: project.startAt,
      finishAt: project.finishAt,
      userUid: project.userUid
    };
  }
}