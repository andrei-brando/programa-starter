import usersData from "../data/users.data";

export default class BaseRepository {
  constructor(protected data: any) {}

  public getAll() {
    return this.data;
  }

  public save(item: any) {
    item.id = this.data.length;

    this.data.push(item);

    return item;
  }
}
