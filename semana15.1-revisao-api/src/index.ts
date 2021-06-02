import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false, }));
app.use(cors());

// GET -> buscar infos
// buscar tudo
app.get('/usuario', (req: Request, res: Response) => {
   const { page } = req.query; // parametro de query

   return res.send('GET ALL');
});
// buscar apenas UM
app.get('/usuario/:id', (req: Request, res: Response) => {
   const { id } = req.params; // parametro de rota

   return res.send('GET UNIQUE');
});

// POST -> salvar NOVA informação
app.post('/usuario', (req: Request, res: Response) => {
   const { nome, idade } = req.body;

   return res.send('SAVE');
});

// PUT -> altera uma info já existente
app.put('/usuario/:id', (req: Request, res: Response) => {
   const { nome, idade } = req.body;
   const { id } = req.params;

   return res.send('Edit');
});

// DELETE -> deleta uma info já existente
app.put('/usuario/:id', (req: Request, res: Response) => {
   const { id } = req.params;

   return res.send('Edit');
});


// RETORNOS
app.get('/send', (req: Request, res: Response) => {
   return res.send('DELETE'); // send -> retorna um texto puro
});

app.get('/json', (req: Request, res: Response) => {
   return res.json({
      nome: 'andrei',
      idade: 23,
   }); // json -> retorna um objeto
});

app.delete('/sem-retorno', (req: Request, res: Response) => {
   return res.status(204);
});


/* MIDDLEWARE
  - validação
  - permissões
  - acessos
  - funcionalidade gerais que não envolvam regra de negócio
*/
// Global
app.use((req: Request, res: Response, next: NextFunction,) => {
   console.log('Passou no middleware');
   next();
});

//especifico de rota
function meuMiddleware(req: Request, res: Response, next: NextFunction,) {
   console.log('Passou no middleware 2');
   next();
}

function meuMiddlewareSegundo(req: Request, res: Response, next: NextFunction,) {
   console.log('Passou no middleware 3');
   next();
}

// rota em si
app.delete('/teste', [meuMiddleware, meuMiddlewareSegundo], (req: Request, res: Response) => {
   return res.status(204);
});

// IMPORT/EXPORT
/* PROMISSE 
     -> normalmente em funções asincronas
     -> requisições para Api
     -> acesso a banco de dados
     -> acesso a arquivos     
*/
function somar(a: number, b: number) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(a + b);
      }, 1000);
   });
}


// ASYNC/AWAIT

app.listen(process.env.PORT || 8080, () => {
   console.log('API RODANDO AULA 01-06-2021');
})