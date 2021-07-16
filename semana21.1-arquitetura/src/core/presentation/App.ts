import express, { Router } from 'express';
import cors from 'cors';

export default class App {
  readonly #express: express.Application;

  constructor() {
    this.#express = express();
  }

  public get server(): express.Application {
    return this.#express;
  }

  public init() {
    this.config();
    this.middlewares();
    this.routes();
  }

  private config() {
    this.#express.use(express.urlencoded({ extended: false }));
    this.#express.use(express.json());
    this.#express.use(cors());
  }

  private middlewares() {
    // TODO
  }

  private routes() {
    // TODO
    //const routes = Router();
  }

  public start(port: number) {
    this.#express.listen(port, () => console.log('API rodando'));
  }
}