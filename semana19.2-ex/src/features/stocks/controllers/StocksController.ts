import { Request, Response } from 'express';
import Database from '../../../core/data/connections/Database';

export default class CategorieController {
  public async index(req: Request, res: Response) {
    const db = await new Database().getConnection();

    const response = await db.query('SELECT * FROM semana19.estoque');

    return res.status(200).json({
      success: true,
      data: response
    });
  }

  public async show(req: Request, res: Response) {
    const { uid } = req.params;
    const db = await new Database().getConnection();

    const response = await db.query('SELECT * FROM semana19.estoque WHERE uid = $1', [uid]);

    return res.status(200).json({
      success: true,
      data: response
    });
  }

  public async store(req: Request, res: Response) {
    const { quantidade, produtoUid } = req.body;
    const db = await new Database().getConnection();

    try {
      const response = await db.query('INSERT INTO semana19.estoque (quantidade, produto_uid) values ($1, $2)', [quantidade, produtoUid],);

      return res.status(200).json({
        success: true,
        data: response,
        message: 'Estoque inserido com sucesso',
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        data: error.message ? error.message : error,
        message: 'Não foi possível inserir o estoque',
      });
    }
  }

  public async update(req: Request, res: Response) {
    const { uid } = req.params;
    const { quantidade, produtoUid } = req.body;
    const db = await new Database().getConnection();

    try {
      const response = await db.query('UPDATE semana19.estoque SET quantidade = $1, produto_uid = $2 WHERE uid = $3', [quantidade, produtoUid, uid]);

      return res.status(200).json({
        success: true,
        data: response,
        message: 'Estoque alterado com sucesso',
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        data: error.message ? error.message : error,
        message: 'Não foi possível alterar o estoque',
      });
    }
  }

  public async delete(req: Request, res: Response) {
    const { uid } = req.params;
    const db = await new Database().getConnection();

    try {
      const response = await db.query('DELETE FROM semana19.estoque WHERE uid = $1', [uid]);

      return res.json({
        success: true,
        message: 'Estoque deletado'
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        data: error.message ? error.message : error,
        message: 'Não foi possível deletar o estoque',
      });
    }
  }
}