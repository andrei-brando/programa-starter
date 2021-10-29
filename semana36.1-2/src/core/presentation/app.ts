import express, { Request, Response, Router } from "express";

export default class App {
  readonly #express: express.Application;

  constructor() {
    this.#express = express();
  }

  public get server(): express.Application {
    return this.#express;
  }

  public init(): void {
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.#express.use(express.json());
    this.#express.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    const router = Router();

    this.#express.get("/", (_: Request, res: Response) =>
      res.send("API RUNNING")
    );
  }

  public start(port: number): void {
    this.#express.listen(port, () =>
      console.log(`Server is running on ${port}`)
    );
  }
}
