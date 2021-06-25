import { Request, Response } from 'express';
import Database from '../../../core/data/connections/Database';

export default class CategorieController {
  public async index(req: Request, res: Response) {
    const db = await new Database().getConnection();

    const response = await db.query('SELECT * FROM semana19.categoria');

    return res.status(200).json({
      data: response
    });
  }

  public async show(req: Request, res: Response) {
    const { uid } = req.params;
    const db = await new Database().getConnection();

    const response = await db.query('SELECT * FROM semana19.categoria WHERE uid = $1', [uid]);

    return res.status(200).json({
      data: response
    });
  }

  public async store(req: Request, res: Response) {
    const { nome, descricao, tag } = req.body;
    const db = await new Database().getConnection();

    const response = await db.query('INSERT INTO semana19.categoria (nome, descricao, tag) values ($1, $2, $3)', [nome, descricao, tag]);

    return res.status(200).json({
      data: response
    });
  }

  public async update(req: Request, res: Response) {
    const { uid } = req.params;
    const { nome, descricao, tag } = req.body;
    const db = await new Database().getConnection();

    const response = await db.query('UPDATE semana19.categoria SET nome = $1, descricao = $2, tag = $3 WHERE uid = $4', [nome, descricao, tag, uid]);

    return res.status(200).json({
      data: response
    });
  }

  public async delete(req: Request, res: Response) {
    const { uid } = req.params;
    const db = await new Database().getConnection();

    const response = await db.query('DELETE FROM semana19.categoria WHERE uid = $1', [uid]);

    return res.json({
      data: response
    });
  }
}