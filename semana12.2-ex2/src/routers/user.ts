import { Router, Request, Response, NextFunction } from "express";
import users from '../utils/fakedb';
import User from '../entities/User';

const routes = Router();

function verifyNewId(): number {
   return users.length == 0 ? 1 : users[users.length - 1].id + 1;
}

routes.post('/users', (req: Request, res: Response, next: NextFunction) => {
   const { name, cpf, email, age } = req.body;

   if (!name || !cpf || !email || !age) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os parametros devem ser informados'
      });
   }

   console.log('POST - /users');

   next();
}, (req: Request, res: Response) => {
   const { name, cpf, email, age } = req.body;

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

routes.get('/users', (req: Request, res: Response, next: NextFunction) => {
   console.log('GET - /users');
   next();
}, (req: Request, res: Response) => {
   return res.status(200).json({
      sucess: true,
      data: users,
      message: 'Retornado'
   });
});

routes.get('/users/:id', (req: Request, res: Response, next: NextFunction) => {
   const { id } = req.params;

   if (!id) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os parametros devem ser informados'
      });
   }

   console.log('GET - /users/:id');

   next();
}, (req: Request, res: Response) => {
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

routes.put('/users/:id', (req: Request, res: Response, next: NextFunction) => {
   const { id } = req.params;
   const { name, cpf, email, age } = req.body;


   if (!id || !name || !cpf || !email || !age) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os parametros devem ser informados, tanto na rota quando no body'
      });
   }

   console.log('PUT - /users/:id');

   next();
}, (req: Request, res: Response) => {
   const { id } = req.params;
   const { name, cpf, email, age } = req.body;

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

routes.delete('/users/:id', (req: Request, res: Response, next: NextFunction) => {
   const { id } = req.params;

   if (!id) {
      return res.status(400).json({
         sucess: false,
         message: 'Dados inválidos'
      });
   }

   console.log('DELETE - /users/:id');

   next();
}, (req: Request, res: Response) => {
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

export default routes;