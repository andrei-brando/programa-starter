import 'reflect-metadata';
import dotenv from 'dotenv';

import App from './../src/core/presentation/app';

dotenv.config();

const app = new App();
const port = process.env.PORT ? parseInt(process.env.PORT) : 8080;

app.init();
app.start(port);
