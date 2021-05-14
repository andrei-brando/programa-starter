import express, { Request, response, Response } from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
   return res.send('KKKJOTA');
});

app.get('/usuarios', (req, res) => {
   const { page } = req.query; //http://localhost:8080/usuarios?page=1

   return res.send('Olá');
});

app.get('/usuarios/:id', (req, res) => {
   const { id } = req.params; //http://localhost:8080/usuarios/10

   if (!id || id === '0') {
      return res.status(400).json({
         status: false,
         message: "ID está errado",
      });
   }

   return res.json({
      id,
      nome: 'Andrei',
      idade: 23,
   });
});

app.post('/usuarios', (req, res) => {
   const { nome, idade } = req.body;

   if (!nome || !idade) {
      return res.status(400).json({
         status: false,
         message: "Os campos devem ser preenchidos",
      });
   }

   return res.status(201).json({
      nome,
      idade,
   });
});

app.put('/usuarios/:id', (req, res) => {
   const { id } = req.params;
   const { nome, idade } = req.body;

   if (!nome || !idade || !id) {
      return res.status(400).json({
         status: false,
         message: "Os campos devem ser preenchidos",
      });
   }

   return res.json({
      id,
      nome,
      idade,
   });
});

app.delete('/usuarios/:id', (req, res) => {
   const { id } = req.params;

   if (!id) {
      console.log('dasds');
      
      return res.status(400).json({
         status: false,
         message: "ID inválido",
      });
   }

   return res.sendStatus(204);
});

app.listen(8080, () => {
   console.log('rodando na porta 8000');
});