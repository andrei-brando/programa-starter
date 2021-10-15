import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import usersList from '../../../../core/infra/data/users.data';
import authConfig from '../../../../core/infra/config/auth.config';

export default class AuthController {
  public async store(request: Request, response: Response) {
    const { email, password } = request.body;

    const user = usersList.find((user) => user.email === email);

    if (!user) {
      return response.status(404).json({ message: 'Email ou senha inválidos' });
    }

    if (user.password !== password) {
      return response.status(404).json({ message: 'Email ou senha inválidos' });
    }

    const body = {
      user,
      token: jwt.sign(
        {
          id: user.id,
        },
        authConfig.secret!,
        {
          expiresIn: authConfig.expiresIn,
        }
      ),
    };

    return response.json(body);
  }
}
