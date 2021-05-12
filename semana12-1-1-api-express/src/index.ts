import express, { Request, response, Response } from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
   console.log('Raiz da API acessada');

   /**
    *  REQUEST QUERY -> localhost:8080/?nome=ALGUMA_COISA
    */

   const { nome, idade } = req.query;

   return res.send(`${nome} tem ${idade} anos`);
});

app.get('/produto/:id', (req: Request, res: Response) => {

   /**
    *  REQUEST PARAMS -> localhost:8080/produto/1234
    */

   const { id } = req.params;

   return res.send(`O produto tem o id: ${id}`);
});

app.listen(8080, () => {
   console.log('API está rodando');

});