import express from 'express';
import cors from 'cors';
import Database from '../data/connections/Database';
import CategoryRoutes from '../../features/categories/routers/CategoryRoutes';
import ProductRoutes from '../../features/products/routers/ProductRoutes';

export default class App {
  readonly #express: express.Application;

  constructor() {
    this.#express = express();
  }

  public async init() {
    this.config();
    this.middlewares();
    this.routes();
    await this.database();
  }

  private async database() {
    await new Database().openConnection();
  }

  private config() {
    this.#express.use(express.json());
    this.#express.use(express.urlencoded({ extended: false }));
    this.#express.use(cors());
  }

  private middlewares() {
    // TODO
  }

  private routes() {
    const categoryRoutes = new CategoryRoutes().init();
    const productRoutes = new ProductRoutes().init();

    this.#express.use(categoryRoutes);
    this.#express.use(productRoutes);
  }

  public start(port: any) {
    this.#express.listen(port, () => {
      console.log('API Rodando');
    });
  }
}