import { NextFunction, Router, Request, Response } from "express";

const routes = Router();

const tokens: Array<string> = [];
const tokensLogados: Array<string> = [];

routes.post('/login', (req: Request, res: Response, next: NextFunction) => {
   const { email, senha } = req.body;

   if (!email || !senha) {
      return res.status(400).json({
         sucess: false,
         message: 'Dados inválidos'
      });
   }

   next();
}, (req: Request, res: Response) => {
   const jwt = Math.random().toString(36).substring(2);

   tokens.push(jwt);

   return res.status(200).json({
      sucess: true,
      message: `Token gerado: ${jwt}`
   });
});

routes.post('/login-jwt', (req: Request, res: Response, next: NextFunction) => {
   const { token } = req.body;

   if (!token) {
      return res.status(400).json({
         sucess: false,
         message: 'Token não preenchido corretamente'
      });
   }

   const findToken = tokens.find((t) => t = token);

   if (findToken) {
      return res.status(400).json({
         sucess: false,
         message: 'Token não encontrado'
      });
   }

   next();
}, (req: Request, res: Response) => {
   const { token } = req.body;

   tokensLogados.push(token);

   return res.status(200).json({
      sucess: true,
      message: 'Você fez login com sucesso'
   });
});

routes.post('/logout-jwt', (req: Request, res: Response, next: NextFunction) => {
   const { token } = req.body;

   if (!token) {
      return res.status(400).json({
         sucess: false,
         message: 'Token não preenchido corretamente'
      });
   }

   const findToken = tokensLogados.find((t) => t = token);

   if (findToken) {
      return res.status(400).json({
         sucess: false,
         message: 'Token não encontrado'
      });
   }

   next();
}, (req: Request, res: Response) => {
   const { token } = req.body;

   const findIndex = tokensLogados.findIndex((t) => t == token);

   tokensLogados.splice(findIndex, 1)

   return res.status(200).json({
      sucess: true,
      message: 'Você se desconectou com sucesso'
   });
});

export default routes;