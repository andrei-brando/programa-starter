import { TaskEntity } from "../../../projects/infra";
import { Task } from "../../domain";

export class TaskRepository {
  public async findAll() {

  }

  public async findOne() {

  }

  public async create(data: Task): Promise<Task> {
    // const { title, description, authorUid, executerUid, projectUid } = data;

    const task = await TaskEntity.create({
      ...data,
    }).save();

    return task;
  }

  public async update() {

  }

  public async delete() {

  }
}