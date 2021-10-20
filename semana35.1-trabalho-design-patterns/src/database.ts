class Database {
  private name: string | undefined;

  constructor() {}

  public setName(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }
}

export { Database };
