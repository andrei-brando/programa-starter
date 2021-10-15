import express, { Request, Response, Router } from 'express';
import cors from 'cors';
import UserRoutes from '../../features/users/presentation/routes/routes';
import AuthRoutes from '../../features/auth/presentation/routes/routes';
import setupSwagger from './../../config-swagger';

export default class App {
  readonly #express: express.Application;

  constructor() {
    this.#express = express();
  }

  public get server(): express.Application {
    return this.#express;
  }

  public init(): void {
    this.config();
    this.routes();
  }

  private config(): void {
    this.#express.use(express.urlencoded({ extended: false }));
    this.#express.use(express.json());
    this.#express.use(cors());
  }

  private routes(): void {
    const router = Router();

    router.get('/', (request: Request, response: Response) => {
      response.send('API RODANDO...');
    });

    setupSwagger(this.#express);

    const userRoutes = new UserRoutes().init();
    const authRoutes = new AuthRoutes().init();

    // this.#express.use(router);
    this.#express.use(userRoutes);
    this.#express.use(authRoutes);
  }

  public start(port: number) {
    this.#express.listen(port, () => {
      console.log(`API RODANDO na porta ${port}`);
    });
  }
}
