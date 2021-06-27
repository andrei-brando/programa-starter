import express, { Request, Response } from 'express';
import 'reflect-metadata';
import Database from './core/data/connections/Database';
import dotenv from 'dotenv';
import {default as CategoriesRoutes} from './features/categories/routes/Routes';
import {default as ProductRoutes} from './features/products/routes/Routes';
import {default as StockRoutes} from './features/stocks/routes/Routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config({
  path: '../.env',
});

app.use(new CategoriesRoutes().init());
app.use(new ProductRoutes().init());
app.use(new StockRoutes().init());

new Database().openConnection().then(() => {
  app.listen(process.env.PORT || 8080, () => console.log('API CRUD'));
});