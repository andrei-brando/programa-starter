import express, { Request, response, Response } from 'express';
import { v4 as uuidGenerator } from 'uuid';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', () => {
   return response.send('rodando');
});

const alunos: Array<any> = [];

app.post('/growdevers', (req: Request, res: Response) => {
   const { nome, turma, idade, cidade } = req.body;

   if (!nome || !turma || !idade || !cidade) {
      return res.status(400).json({
         status: false,
         message: "Dados inválidos.",
      });
   }

   const growdever = {
      id: uuidGenerator(),
      nome,
      turma,
      idade,
      cidade,
   };

   alunos.push(growdever);

   return res.json(growdever);
});

app.get('/growdevers', (req, res) => {
   const { idade } = req.query;

   const result = alunos.filter((aluno) => idade ? aluno.idade == idade : true);

   return res.json(result);
});

app.get('/growdevers/:id', (req: Request, res: Response) => {
   const { id } = req.params;

   if (!id) {
      return res.status(400).json({
         message: 'Dados inválidos',
      });
   }

   const user = alunos.find((aluno: any) => aluno.id == id);

   if (!user) {
      return res.status(404).json({
         message: 'Aluno não encontrado',
      });
   }

   return res.json(user);
});

app.put('/growdevers/:id', (req: Request, res: Response) => {
   const { id } = req.params;
   const { nome, turma, idade, cidade } = req.body;

   if (!nome || !turma || !idade || !cidade || !id) {
      return res.status(400).json({
         status: false,
         message: "Dados inválidos.",
      });
   }

   const index = alunos.findIndex((aluno) => aluno.id == id);

   if (index < 0) {
      return res.status(404).json({
         message: 'Aluno não encontrado',
      });
   }

   alunos[index] = {
      id,
      nome,
      turma,
      idade,
      cidade,
   };

   return res.json(alunos[index]);
});

app.delete('/growdevers/:id', (req: Request, res: Response) => {
   const { id } = req.params;
   
   const index = alunos.findIndex((aluno) => aluno.id == id);

   if (index < 0) {
      return res.status(404).json({
         message: 'Aluno não encontrado',
      });
   }

   alunos.splice(index);

   return res.status(200).json({
      message: "Deu certo",
   });
});

app.listen(8080, () => {
   console.log('rodando na porta 8080');
});