import express, { Request, Response } from 'express';
import User from '../src/User';
import Transaction from '../src/Transaction';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const users: Array<User> = [];

function verifyNewId(): number {
   return users.length == 0 ? 1 : users[users.length - 1].id + 1;
}

app.post('/users', (req: Request, res: Response) => {
   const { name, cpf, email, age } = req.body;


   if (!name || !cpf || !email || !age) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os parametros devem ser informados'
      });
   }

   const findUser = users.find((user) => user.cpf == cpf);

   if (findUser) {
      return res.status(400).json({
         sucess: false,
         message: 'Cpf já cadastrado.'
      });
   }

   const user = new User(
      verifyNewId(),
      name,
      cpf,
      email,
      age,
   );

   users.push(user);

   return res.status(200).json({
      sucess: true,
      message: 'Usuário cadastrado com sucesso'
   });
});

app.get('/users', (req: Request, res: Response) => {
   return res.status(200).json({
      sucess: true,
      data: users,
      message: 'Retornado'
   });
});

app.get('/users/:id', (req: Request, res: Response) => {
   const { id } = req.params;

   const user = users.find((u) => u.id == parseInt(id));

   return res.status(200).json({
      sucess: true,
      data: {
         id: user?.id,
         name: user?.name,
         cpf: user?.cpf,
         email: user?.email,
         age: user?.age,
      },
      message: 'Deu certo',
   });
});

app.put('/users/:id', (req: Request, res: Response) => {
   const { id } = req.params;
   const { name, cpf, email, age } = req.body;


   if (!id || !name || !cpf || !email || !age) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os parametros devem ser informados, tanto na rota quando no body'
      });
   }

   const userIndex = users.findIndex((u) => u.id == parseInt(id));

   if (userIndex < 0) {
      return res.status(400).json({
         sucess: false,
         message: 'Usuário não encontrado'
      });
   }

   const user = new User(
      parseInt(id),
      name,
      cpf,
      email,
      age,
   );

   users.splice(userIndex, 1, user);

   return res.status(200).json({
      sucess: true,
      message: 'Usuário atualizado com sucesso'
   });
});

app.delete('/users/:id', (req: Request, res: Response) => {
   const { id } = req.params;

   const userIndex = users.findIndex((u) => u.id == parseInt(id));

   if (userIndex < 0) {
      return res.status(400).json({
         sucess: false,
         message: 'Usuário não encontrado'
      });
   }

   users.splice(userIndex, 1);

   return res.status(200).json({
      sucess: true,
      message: 'Removido o usuário',
   });
});

//
// TRANSACTIONS
// 
function verifyNewIdTransaction(index: number): number {
   const userTransaction = users[index].transactions;

   return userTransaction.length == 0
      ? 1
      : userTransaction[userTransaction.length - 1].id + 1;
}

app.post('/user/:userId/transactions', (req: Request, res: Response) => {
   const { userId } = req.params;
   const { title, value, type } = req.body;

   if (!userId || !title || !value || !type) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os parametros devem ser informados'
      });
   }

   const user = users.find((user) => user.id == parseInt(userId));
   const userIndex = users.findIndex((user) => user.id == parseInt(userId));

   if (typeof user == 'undefined') {
      return res.status(400).json({
         sucess: false,
         message: 'Usuário não encontrado'
      });
   }

   const transaction = new Transaction(
      verifyNewIdTransaction(userIndex),
      title,
      value,
      type,
   );

   user.transactions.push(transaction);

   return res.status(200).json({
      sucess: true,
      message: 'Transação cadastrada com sucesso'
   });
});

app.get('/user/:userId/transactions', (req: Request, res: Response) => {
   const { userId } = req.params;

   if (!userId) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os parametros devem ser informados'
      });
   }

   const transactions = users.find((u) => u.id == parseInt(userId))?.transactions;

   let income: number = 0;
   let outcome: number = 0;
   let total: number = 0;

   transactions?.forEach((t) => {
      if (t.type === 'income') {
         income += t.value;
      } else {
         outcome += t.value;
      }
   });

   total = income - outcome;

   return res.status(200).json({
      sucess: true,
      data: {
         transactions,
         "balance": {
            income,
            outcome,
            total,
         }
      } ?? [],
      message: 'Transações encontradas',
   });
});

app.get('/user/:userId/transactions/:id', (req: Request, res: Response) => {
   const { userId, id } = req.params;

   if (!userId || !id) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os parametros devem ser informados'
      });
   }

   const user = users.find((u) => u.id == parseInt(userId));

   const transaction = user?.transactions.find((t) => t.id == parseInt(id));

   if (!transaction) {
      return res.status(400).json({
         sucess: true,
         message: 'Transação não encontrada',
      });
   }

   return res.status(200).json({
      sucess: true,
      data: transaction ?? [],
      message: 'Transações encontradas',
   });
});

app.put('/user/:userId/transactions/:id', (req: Request, res: Response) => {
   const { userId, id } = req.params;
   const { title, value, type } = req.body;

   if (!userId || !title || !value || !type || !id) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os parametros devem ser informados'
      });
   }

   // const user = users.find((u) => u.id == parseInt(userId));
   const userIndex = users.findIndex((u) => u.id == parseInt(userId));

   if (userIndex < 0) {
      return res.status(400).json({
         sucess: false,
         message: 'Usuário não encontrado'
      });
   }

   const transactionIndex = users[userIndex]?.transactions.findIndex((t) => t.id == parseInt(id));

   if (transactionIndex < 0) {
      return res.status(400).json({
         sucess: false,
         message: 'Transação não encontrada',
      });
   }

   const transaction = new Transaction(
      parseInt(id),
      title,
      value,
      type,
   );

   users[userIndex].transactions.splice(transactionIndex, 1, transaction);

   return res.status(200).json({
      sucess: true,
      data: transaction ?? [],
      message: 'Transação atualizada',
   });
});

app.delete('/user/:userId/transactions/:id', (req: Request, res: Response) => {
   const { userId, id } = req.params;

   if (!userId || !id) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os parametros devem ser informados'
      });
   }

   const userIndex = users.findIndex((u) => u.id == parseInt(userId));

   if (userIndex < 0) {
      return res.status(400).json({
         sucess: false,
         message: 'Usuário não encontrado'
      });
   }

   const transactionIndex = users[userIndex]?.transactions.findIndex((t) => t.id == parseInt(id));

   if (transactionIndex < 0) {
      return res.status(400).json({
         sucess: false,
         message: 'Transação não encontrada',
      });
   }

   users[userIndex].transactions.splice(transactionIndex, 1);

   return res.status(200).json({
      sucess: true,
      message: 'Transação deletada',
   });
});

app.listen(8000, () => {
   console.log('API rodando na porta 8000');
})