import express, { Request, Response } from 'express';
import 'reflect-metadata';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config({
  path: '../.env',
});

const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
  return res.send('rota inicial');
});

app.listen(port, () => {
  console.log(`Api rodando... porta ${port}`);
});