import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { v4 as uuidGenerator } from 'uuid';

import Notes from './Notes';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

dotenv.config();

app.get('/', (req: Request, res: Response) => {
  return res.json({
    info: 'API-NOTES'
  });
});


function verifyBody(req: Request, res: Response, next: NextFunction) {
  const { description, details } = req.body;

  if (!description) {
    return res.status(400).json({
      success: false, 
      message: 'Descrição do recado deve ser preenchida',
    });
  }

  next();
}

function verifyId(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false, 
      message: 'Id do recado deve ser enviado na requisição',
    });
  }

  next();
}

const notes: Array<Notes> = [];

app.post('/notes', verifyBody, (req: Request, res: Response) => {
  const { description, details } = req.body;

  const note = new Notes(
    uuidGenerator(),
    description,
    details,
  );

  notes.push(note);

  return res.status(200).json({
    success: true,
    data: note,
    message: 'Recado inserido com successo'
  });
});

app.get('/notes', (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    data: notes,
    message: 'Recados retornados com successo',
  });
});

app.get('/notes/:id', verifyId, (req: Request, res: Response) => {
  const { id } = req.params;

  const findNote = notes.find((note) => note.id == id);

  if (!findNote) {
    return res.status(400).json({
      success: false,
      data: [],
      message: 'Não foi encontrada o recado com o id específico',
    });
  }

  return res.status(200).json({
    success: true,
    data: findNote,
    message: 'Recado encontrado',
  });
});

app.put('/notes/:id', [verifyId, verifyBody], (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, details } = req.body;

  const findNoteIndex = notes.findIndex((note) => note.id == id);

  if (findNoteIndex < 0) {
    return res.status(400).json({
      success: false,
      data: [],
      message: 'Não foi encontrada o recado com o id específico',
    });
  }

  notes[findNoteIndex].description = description;
  notes[findNoteIndex].details = details;

  return res.status(200).json({
    success: true,
    data: notes[findNoteIndex],
    message: 'Recado atualziado com successo',
  });
});

app.delete('/notes/:id', verifyId, (req: Request, res: Response) => {
  const { id } = req.params;

  const findNoteIndex = notes.findIndex((note) => note.id == id);

  if (findNoteIndex < 0) {
    return res.status(400).json({
      success: false,
      data: [],
      message: 'Não foi encontrada o recado com o id específico',
    });
  }

  notes.splice(findNoteIndex, 1);

  return res.status(200).json({
    success: true,
    data: notes,
    message: 'Recado foi deletado com successo',
  });
});

app.listen(process.env.PORT || 8000, () => {
  console.log('API RODANDO NA PORTA ');
});