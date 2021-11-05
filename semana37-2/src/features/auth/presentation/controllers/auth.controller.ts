import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import usersList from '../../../../core/infra/data/users.data';
import authConfig from '../../../../core/infra/config/auth.config';

export default class AuthController {
    public async store(request: Request, response: Response) {
        const { email, password } = request.body;

        // 1 passo -> verificar se usuário existe, pelo email
        const user = usersList.find(user => user.email === email);

        if (!user) {
            return response.status(404)
                           .json({
                               message: 'E-mail ou senha inválidos'
                           });
        }

        // 2 passo - verificar se a senha está correta
        if (user.password !== password) {
            return response.status(404)
                           .json({
                               message: 'E-mail ou senha inválidos'
                           });
        }

        // 3 passo - gerar o token        
        return response.json({
            user,
            token: jwt.sign(
                {
                    id: user.id
                },
                authConfig.secret!,
                {
                    expiresIn: authConfig.expiresIn
                }
            )
        });
    }
}