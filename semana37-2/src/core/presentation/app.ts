import express, { Router, Request, Response } from 'express';
import cors from 'cors';
import UserRoutes from '../../features/users/presentation/routes/routes';
import AuthRoutes from '../../features/auth/presentation/routes/routes';
import setupSwagger from '../../config-swagger';

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

    private config() {
        this.#express.use(express.urlencoded({extended: false}));
        this.#express.use(express.json());
        this.#express.use(cors());
    }

    private routes(): void {
        const router = Router();

        router.get('/', (request: Request, response: Response) => {
            response.send('API funcionando...');
        });

        setupSwagger(this.#express);

        const userRoutes = new UserRoutes().init(router);
        const authRoutes = new AuthRoutes().init(router);

        this.#express.use(userRoutes);
        this.#express.use(authRoutes);
    }

    public start(port: number): void {
        this.#express.listen(port, () => {
            console.log(`API rodando na porta ${port}`);
        });
    }
}