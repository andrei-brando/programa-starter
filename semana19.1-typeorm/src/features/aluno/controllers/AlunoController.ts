import { Request, Response } from 'express';
import Database from '../../../core/data/connections/Database';

export default class AlunoController {
  // GET - ALL
  public async index(req: Request, res: Response) {
    const connection = new Database().getConnection();
    
    const alunos = await connection.query('select * from semana18.aluno');

    return res.status(200).json(alunos);
  }
  // GET - ONE
  public async show(req: Request, res: Response) {
    const { id } = req.params;
    const connection = new Database().getConnection();

    const aluno = await connection.query('select * from semana18.aluno where id = $1', [id]);

    return res.status(200).json(aluno);
  }
  // POST - CREATE
  public async store(req: Request, res: Response) {
    const {nome, data_nascimento, cidade, uf, turma_id} = req.body;
    const connection = new Database().getConnection();

    const result = await connection.query(
      'INSERT INTO semana18.aluno (nome, data_nascimento, cidade, uf, turma_id) values ($1, $2, $3, $4, $5)',
      [nome, data_nascimento, cidade, uf, turma_id]
    );

    return res.status(200).json(result);
  }
  // PUT - UPDATE
  public async update(req: Request, res: Response) {
    const {id} = req.params;
    const {nome, data_nascimento, cidade, uf, turma_id} = req.body;
    const connection = new Database().getConnection();

    const result = await connection.query(
      'UPDATE semana18.aluno SET nome = $1, data_nascimento = $2, cidade = $3, uf = $4, turma_id = $5) WHERE id = $6',
      [nome, data_nascimento, cidade, uf, turma_id, id]
    );

    return res.status(200).json(result);
  }
  // DELETE - DELETE
  public async delete(req: Request, res: Response) {
    const {id} = req.params;
    const connection = new Database().getConnection();

    await connection.query('DELETE FROM semana18.nota WHERE aluno_id = $1', [id]);
    await connection.query('DELETE FROM semana18.aluno WHERE id = $1', [id]);

    return res.sendStatus(204);
  }
}