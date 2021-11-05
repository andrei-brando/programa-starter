import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import authConfig from '../../../../core/infra/config/auth.config';

export default async (request: any, response: Response, next: NextFunction) => {
    const { authorization } = request.headers;

    if (!authorization) {
        return response.status(401).json({
            message: 'Token inválido'
        });
    }

    const [, token] = authorization.split(' ');

    try {
        jwt.verify(token, authConfig.secret!, (err: any, decoded: any) => {
            request.userId = decoded.id;

            return next();
        });

    } catch (error) {
        return response.status(401).json({
            message: 'Token inválido'
        });
    }
}