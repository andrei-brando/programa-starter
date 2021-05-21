import express, { Request, Response, NextFunction, json } from 'express';
import { fileURLToPath } from 'url';
import Transaction from './Transaction';
import User from './User';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let users: Array<User> = [];

app.post('/users', (req: Request, res: Response, next: NextFunction) => {
   const { name, cpf, email, age } = req.body;

   if (!name || !cpf || !email || !age) {
      return res.status(400).json({
         message: "Dados inválidos"
      });
   }

   const findCpf = users.find((user) => user.cpf == cpf);

   if (findCpf) {
      return res.status(400).json({
         sucess: false,
         message: "Cpf já existe, usuário já cadastrado",
      });
   }

   next();
}, (req: Request, res: Response) => {
   const { name, cpf, email, age } = req.body;

   const id = users.length == 0 ? 1 : users[users.length - 1].id + 1;

   const user = new User(
      id,
      name,
      cpf,
      email,
      age,
   );

   users.push(user);

   return res.status(200).json({
      sucess: true,
      data: user,
      message: "Usuário cadastrado com sucesso",
   });
});

app.get('/users/:id', (req: Request, res: Response, next: NextFunction) => {
   const { id } = req.params;

   if (!id) {
      return res.status(400).json({
         message: "Dados inválidos"
      });
   }

   next();
}, (req: Request, res: Response) => {
   const { id } = req.params;

   const user = users.find((u) => u.id == parseInt(id));

   if (!user) {
      return res.status(404).json({
         sucess: false,
         data: [],
         message: "Usuário não encontrado"
      });
   }

   return res.status(200).json({
      sucess: true,
      data: user,
      message: "Usuário encontrado"
   });
});

app.get('/users', (req: Request, res: Response) => {
   return res.status(200).json({
      sucess: true,
      data: users,
      message: "Busca Concluída"
   });
});

app.put('/users/:id', (req: Request, res: Response, next: NextFunction) => {
   const { id } = req.params;
   const { name, cpf, email, age } = req.body;

   if (!id || !name || !cpf || !email || !age) {
      return res.status(400).json({
         message: "Dados inválidos"
      });
   }

   next();
}, (req: Request, res: Response) => {
   const { id } = req.params;
   const { name, cpf, email, age } = req.body;

   const index = users.findIndex((u) => u.id == parseInt(id));

   if (index < 0) {
      return res.status(404).json({
         sucess: false,
         data: [],
         message: "Usuário não encontrado"
      });
   }

   users[index].name = name;
   users[index].email = email;
   users[index].cpf = cpf;
   users[index].age = age;

   return res.status(404).json({
      sucess: true,
      data: users[index],
      message: "Usuário atualizado"
   });
});

app.delete('/users/:id', (req: Request, res: Response, next: NextFunction) => {
   const { id } = req.params;

   if (!id) {
      return res.status(400).json({
         message: "Dados inválidos"
      });
   }

   next();
}, (req: Request, res: Response) => {
   const { id } = req.params;

   const index = users.findIndex((u) => u.id == parseInt(id));

   users.splice(index, 1);

   return res.status(404).json({
      sucess: true,
      message: "Usuário Excluído"
   });
});

/**
 * FAZER A ROTA
 * RECEBER OS PARAMETROS DENTRO DO CORPO DA REQUISIÇÃO
 * TYPE -> INCOME   OUTCOME
 * CRAIR UMA INSTANCIA DA CLASSE TRANSACTION
 * ADICIONAR ESSA TRANSACAO AO USUARIO RESPONSAVEL
 */

// :id -> req.params
// quando tiver corpo no insomnia -> req.body;
// quando tiver query no insomnia -> req.query

app.post('/user/:userId/transactions', (req: Request, res: Response, next: NextFunction) => {
   const { userId } = req.params;
   const { title, value, type } = req.body;

   if (!userId || !title || !value || !type) {
      return res.status(400).json({
         message: "Dados inválidos"
      });
   }

   next();
}, (req: Request, res: Response) => {
   const { userId } = req.params;
   const { title, value, type } = req.body;

   const user = users.find((user) => user.id == parseInt(userId));

   if (!user) {
      return res.status(400).json({
         message: "Usuário não encontrado"
      });
   }

   const idTra = user.transaction.length == 0 ? 1 : user.transaction[user.transaction.length - 1].id + 1;

   const transaction = new Transaction(
      idTra,
      title,
      value,
      type
   );

   user.transaction.push(transaction);

   return res.status(200).json({
      sucess: true,
      data: transaction,
      message: "Transação adicionada com sucesso"
   });
});

app.get('/user/:userId/transactions/:id', (req: Request, res: Response, next: NextFunction) => {
   const { id } = req.params;
   const { userId } = req.params;

   if (!id || !userId) {
      return res.status(400).json({
         message: "Dados inválidos"
      });
   }

   next();
}, (req: Request, res: Response) => {
   const { id } = req.params; // transac 
   const { userId } = req.params; // id user

   const user = users.find((u) => u.id == parseInt(userId));

   if (!user) {
      return res.status(404).json({
         sucess: false,
         data: [],
         message: "Usuário não encontrado"
      });
   }

   const transaction = user.transaction.find((elemento) => elemento.id == parseInt(id));

   if (!transaction) {
      return res.status(404).json({
         sucess: false,
         data: [],
         message: "Transação não encontrada"
      });
   }
   
   return res.status(200).json({
      sucess: true,
      data: transaction,
      message: "Usuário encontrado"
   });
});

app.get('/user/:userId/transactions', (req: Request, res: Response, next: NextFunction) => {
   const { userId } = req.params;

   if (!userId) {
      return res.status(400).json({
         message: "Dados inválidos"
      });
   }

   next();
}, (req: Request, res: Response) => {
   const { userId } = req.params; // id user
   let income = 0;
   let outcome = 0;
   let total = 0;

   const user = users.find((u) => u.id == parseInt(userId));

   if (!user) {
      return res.status(404).json({
         sucess: false,
         data: [],
         message: "Usuário não encontrado"
      });
   }

   user.transaction.forEach((t) => {
      if (t.type == 'income') {
         income += t.value;
      } else {
         outcome += t.value;
      }
   });

   total = income - outcome;
   
   return res.status(200).json({
      sucess: true,
      data: {
         transaction: user.transaction,
         balance: {
            income,
            outcome,
            total,
         }
      },
      message: "Transações encontradas"
   });
});

app.put('/user/:userId/transactions/:id', (req: Request, res: Response, next: NextFunction) => {
   const { userId, id } = req.params;
   const { title, value, type } = req.body;

   if (!userId || !id || !title || !value || !type) {
      return res.status(400).json({
         message: "Dados inválidos"
      });
   }

   next();
}, (req: Request, res: Response) => {
   const { userId, id } = req.params;
   const { title, value, type } = req.body;

   const user = users.find((user) => user.id == parseInt(userId));

   if (!user) {
      return res.status(400).json({
         message: "Usuário não encontrado"
      });
   }

   const transacIndex = user.transaction.findIndex((elemento) => elemento.id == parseInt(id));

   if (transacIndex < 0) {
      return res.status(400).json({
         message: "Transação não encontrada"
      });
   }

   user.transaction[transacIndex].title = title;
   user.transaction[transacIndex].value = value;
   user.transaction[transacIndex].type = type;

   return res.status(200).json({
      sucess: true,
      data: user.transaction[transacIndex],
      message: "Transação atualizada"
   });
});

// fazer o delete

app.listen(8080, () => {
   console.log('API rodando na porta 8080');
});