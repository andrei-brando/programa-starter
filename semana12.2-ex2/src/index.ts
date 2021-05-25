import express, { Request, Response, NextFunction } from 'express';
import routes from './routers';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use((req: Request, res: Response, next: NextFunction) => {
   const { url, method, ip } = req;

   console.log(url, method, ip);

   next();
});

app.use(routes);

app.listen(8000, () => {
   console.log('API rodando na porta 8000');
})