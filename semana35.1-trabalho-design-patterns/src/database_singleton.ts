class DatabaseSingleton {
  private static instance: DatabaseSingleton;
  private name: string | undefined;

  private constructor() {}

  public static getInstance(): DatabaseSingleton {
    if (!DatabaseSingleton.instance) {
      DatabaseSingleton.instance = new DatabaseSingleton();
    }

    return DatabaseSingleton.instance;
  }

  public printaAlgo(algo: string) {
    console.log(algo);
  }

  public setName(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }
}

export { DatabaseSingleton };
