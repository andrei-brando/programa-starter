import { TaskEntity } from "../../../projects/infra";
import { Task } from "../../domain";

export class TaskRepository {
  public async findAll(): Promise<Task[] | null> {
    const tasks = await TaskEntity.find();

    if (!tasks) return null;

    return tasks;
  }

  public async findOne(uid: string): Promise<Task | null> {
    const task = await TaskEntity.findOne(uid);

    if (!task) return null;

    return task;
  }

  public async create(data: Task): Promise<Task> {
    // const { title, description, authorUid, executerUid, projectUid } = data;

    const task = await TaskEntity.create({
      ...data,
    }).save();

    return task;
  }

  public async update(uid: string, data: Task): Promise<void | null> {
    const { title, description, authorUid, executerUid, projectUid, } = data;

    const task = await TaskEntity.findOne(uid);

    if (!task) return null;

    title ? task.title = title : null;
    description ? task.description = description : null;

    await task.save();
  }

  public async delete(uid: string): Promise<void> {
    const task = await TaskEntity.findOne(uid);
    if (task) task.remove();
  }
}