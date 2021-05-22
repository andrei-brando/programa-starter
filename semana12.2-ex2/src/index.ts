import express, { Request, Response, NextFunction } from 'express';
import routes from './routers';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(8000, () => {
   console.log('API rodando na porta 8000');
})