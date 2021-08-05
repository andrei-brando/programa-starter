import { User } from "../../../projects/domain";
import { Project } from "../../../projects/domain/models";

interface Task {
  uid: string;
  title: string;
  description?: string;
  authorUid: string;
  executerUid: string;
  projectUid: string;
  userAuthor: User;
  userExecuter: User;
  project: Project;
}

export { Task }