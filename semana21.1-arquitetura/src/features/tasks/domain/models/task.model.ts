interface Task {
  uid: string;
  title: string;
  description?: string;
  authorUid: string;
  executerUid: string;
  projectUid: string;
}

export { Task }