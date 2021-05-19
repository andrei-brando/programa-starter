import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Middleware
 *  - global (app.use)
 *  - por conjunto de rotas (app.use)
 *  - individual (dentro da rota)
 */

app.use((req: Request, res: Response, next: NextFunction) => {
   const { protocol, url, method, params, body, query } = req;
   console.log(protocol, url, method, params, body, query);

   console.log('Caiu aqui');

   return next();
});

app.get('/', (req: Request, res: Response) => {
   return res.send('Home');
});

app.get('/produtos', (req: Request, res: Response) => {
   return res.send('Produtos');
});

function validarProduto(req: Request, res: Response, next: NextFunction) {
   const { nome } = req.body;

   if (!nome) {
      return res.json({
         message: 'Id Inválido'
      });
   }

   return next();
}

app.post('/produtos/:id', validarProduto, (req: Request, res: Response) => {
   return res.send('Produtos detalhe');
});

app.listen(8080, () => {
   console.log('API rodando');
})