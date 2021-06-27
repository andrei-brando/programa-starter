import { Request, Response } from 'express';
import Database from '../../../core/data/connections/Database';

export default class CategorieController {
  public async index(req: Request, res: Response) {
    const db = await new Database().getConnection();

    const response = await db.query('SELECT * FROM semana19.produto');

    return res.status(200).json({
      success: true,
      data: response
    });
  }

  public async show(req: Request, res: Response) {
    const { uid } = req.params;
    const db = await new Database().getConnection();

    const response = await db.query('SELECT * FROM semana19.produto WHERE uid = $1', [uid]);

    return res.status(200).json({
      success: true,
      data: response
    });
  }

  public async store(req: Request, res: Response) {
    const { nome, descricao, categoriaUid } = req.body;
    const db = await new Database().getConnection();

    try {
      const response = await db.query('INSERT INTO semana19.produto (nome, descricao, categoria_uid) values ($1, $2, $3)', [nome, descricao, categoriaUid],);

      return res.status(200).json({
        success: true,
        data: response,
        message: 'Produto inserido com sucesso',
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        data: error.message ? error.message : error,
        message: 'Não foi possível inserir o produto',
      });
    }
  }

  public async update(req: Request, res: Response) {
    const { uid } = req.params;
    const { nome, descricao, categoriaUid } = req.body;
    const db = await new Database().getConnection();

    try {
      const response = await db.query('UPDATE semana19.produto SET nome = $1, descricao = $2, categoria_uid = $3 WHERE uid = $4', [nome, descricao, categoriaUid, uid]);

      return res.status(200).json({
        success: true,
        data: response,
        message: 'Produto alterado com sucesso',
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        data: error.message ? error.message : error,
        message: 'Não foi possível alterar o produto',
      });
    }
  }

  public async delete(req: Request, res: Response) {
    const { uid } = req.params;
    const db = await new Database().getConnection();

    try {
      const response = await db.query('DELETE FROM semana19.produto WHERE uid = $1', [uid]);

      return res.json({
        success: true,
        message: 'Produto deletado'
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        data: error.message ? error.message : error,
        message: 'Não foi possível deletar o produto',
      });
    }
  }
}