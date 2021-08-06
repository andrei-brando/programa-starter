import { ProjectEntity } from '../../../../core/infra';
import { Project } from '../../domain/models';

export class ProjectRepository {
  async create(params: Project): Promise<Project> {
    const { name, description, startAt, finishAt, userUid } = params;

    const project = await ProjectEntity.create({
      name,
      description,
      startAt,
      finishAt,
      userUid
    }).save();

    return Object.assign({}, params, project);
  }

  async getAll(): Promise<Project[]> {
    const projects = await ProjectEntity.find();

    return projects.map(project => ({
      uid: project.uid,
      name: project.name,
      description: project.description,
      startAt: project.startAt,
      finishAt: project.finishAt,
      userUid: project.userUid
    }));
  }

  async getOne(uid: string): Promise<Project | null> {
    const project = await ProjectEntity.findOne(uid);

    if (!project) {
      return null;
    }

    return {
      uid: project.uid,
      name: project.name,
      description: project.description,
      startAt: project.startAt,
      finishAt: project.finishAt,
      userUid: project.userUid
    };
  }

  async update(uid: string, params: Project): Promise<Project | null> {
    const { name, description, startAt, finishAt } = params;

    const project = await ProjectEntity.findOne(uid);

    if (!project) return null;

    project.name = name;
    project.description = description;
    startAt ? project.startAt = startAt : null;
    finishAt ? project.finishAt : null;

    project.save();

    return project;
  }

  public async delete(uid: string): Promise<void> {
    const project = await ProjectEntity.findOne(uid);

    if (project) project.remove();
  }
}