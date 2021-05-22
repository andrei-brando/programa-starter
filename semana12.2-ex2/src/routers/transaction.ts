import { Router, Request, Response, NextFunction } from "express";
import users from '../utils/fakedb';
import Transaction from '../entities/Transaction';

const routes = Router();

function verifyNewIdTransaction(index: number): number {
   const userTransaction = users[index].transactions;

   return userTransaction.length == 0
      ? 1
      : userTransaction[userTransaction.length - 1].id + 1;
}

routes.post('/user/:userId/transactions', (req: Request, res: Response, next: NextFunction) => {
   const { userId } = req.params;
   const { title, value, type } = req.body;

   if (!userId || !title || !value || !type) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os parametros devem ser informados'
      });
   }

   console.log('POST - /user/:userId/transactions');

   next();
}, (req: Request, res: Response) => {
   const { userId } = req.params;
   const { title, value, type } = req.body;

   const user = users.find((user:any) => user.id == parseInt(userId));
   const userIndex = users.findIndex((user:any) => user.id == parseInt(userId));

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

routes.get('/user/:userId/transactions', (req: Request, res: Response, next: NextFunction) => {
   const { userId } = req.params;

   if (!userId) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os parametros devem ser informados'
      });
   }

   console.log('GET - /user/:userId/transactions');

   next();
}, (req: Request, res: Response) => {
   const { userId } = req.params;

   const transactions = users.find((u:any) => u.id == parseInt(userId))?.transactions;

   let income: number = 0;
   let outcome: number = 0;
   let total: number = 0;

   transactions?.forEach((t:any) => {
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

routes.get('/user/:userId/transactions/:id', (req: Request, res: Response, next: NextFunction) => {
   const { userId, id } = req.params;

   if (!userId || !id) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os parametros devem ser informados'
      });
   }

   console.log('GET - /user/:userId/transactions/:id');

   next();
}, (req: Request, res: Response) => {
   const { userId, id } = req.params;

   const user = users.find((u) => u.id == parseInt(userId));

   const transaction = user?.transactions.find((t:any) => t.id == parseInt(id));

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

routes.put('/user/:userId/transactions/:id', (req: Request, res: Response, next: NextFunction) => {
   const { userId, id } = req.params;
   const { title, value, type } = req.body;

   if (!userId || !title || !value || !type || !id) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os parametros devem ser informados'
      });
   }

   console.log('PUT - /user/:userId/transactions/:id');
   
   next();
},(req: Request, res: Response) => {
   const { userId, id } = req.params;
   const { title, value, type } = req.body;

   const userIndex = users.findIndex((u) => u.id == parseInt(userId));

   if (userIndex < 0) {
      return res.status(400).json({
         sucess: false,
         message: 'Usuário não encontrado'
      });
   }

   const transactionIndex = users[userIndex]?.transactions.findIndex((t:any) => t.id == parseInt(id));

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

routes.delete('/user/:userId/transactions/:id', (req: Request, res: Response, next: NextFunction) => {
   const { userId, id } = req.params;

   if (!userId || !id) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os parametros devem ser informados'
      });
   }

   console.log('DELETE - /user/:userId/transactions/:id');
   
   next();
},(req: Request, res: Response) => {
   const { userId, id } = req.params;

   const userIndex = users.findIndex((u) => u.id == parseInt(userId));

   if (userIndex < 0) {
      return res.status(400).json({
         sucess: false,
         message: 'Usuário não encontrado'
      });
   }

   const transactionIndex = users[userIndex]?.transactions.findIndex((t:any) => t.id == parseInt(id));

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

export default routes;