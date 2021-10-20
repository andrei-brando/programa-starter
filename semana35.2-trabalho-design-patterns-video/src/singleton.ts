class Singleton {
  private static instance: Singleton;
  private name: string | undefined;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }
}

export { Singleton };
