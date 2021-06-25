import express, { Request, Response } from 'express';
import 'reflect-metadata';
import dotenv from 'dotenv';
import Database from './core/data/connections/Database';
import { default as AlunoRoutes } from './features/aluno/routers/Routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config({
  path: '../.env',
});

const alunoRoutes = new AlunoRoutes().init();

app.use(alunoRoutes);

const port = process.env.PORT || 8080;

new Database().openConnection().then(() => {
  app.listen(port, () => console.log('API RODANDO'));
});