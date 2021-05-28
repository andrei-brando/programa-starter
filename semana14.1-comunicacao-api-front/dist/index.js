"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default());
dotenv_1.default.config();
app.get('/', (req, res) => {
    return res.send('rodando');
});
const alunos = [
    {
        id: uuid_1.v4(),
        nome: 'Andrei',
        turma: 'AAA',
        idade: 23,
        cidade: 'Sapiranga',
    },
    {
        id: uuid_1.v4(),
        nome: 'Vini',
        turma: 'AAA',
        idade: 18,
        cidade: 'Sapiranga',
    },
];
app.post('/growdevers', (req, res) => {
    const { nome, turma, idade, cidade } = req.body;
    if (!nome || !turma || !idade || !cidade) {
        return res.status(400).json({
            status: false,
            message: "Dados inválidos.",
        });
    }
    const growdever = {
        id: uuid_1.v4(),
        nome,
        turma,
        idade,
        cidade,
    };
    alunos.push(growdever);
    return res.json(growdever);
});
app.get('/growdevers', (req, res) => {
    // const { idade } = req.query;
    // const result = alunos.filter((aluno) => idade ? aluno.idade == idade : true);
    return res.json(alunos);
});
app.get('/growdevers/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            message: 'Dados inválidos',
        });
    }
    const user = alunos.find((aluno) => aluno.id == id);
    if (!user) {
        return res.status(404).json({
            message: 'Aluno não encontrado',
        });
    }
    return res.json(user);
});
app.put('/growdevers/:id', (req, res) => {
    const { id } = req.params;
    const { nome, turma, idade, cidade } = req.body;
    if (!nome || !turma || !idade || !cidade || !id) {
        return res.status(400).json({
            status: false,
            message: "Dados inválidos.",
        });
    }
    const index = alunos.findIndex((aluno) => aluno.id == id);
    if (index < 0) {
        return res.status(404).json({
            message: 'Aluno não encontrado',
        });
    }
    alunos[index] = {
        id,
        nome,
        turma,
        idade,
        cidade,
    };
    return res.json(alunos[index]);
});
app.delete('/growdevers/:id', (req, res) => {
    const { id } = req.params;
    const index = alunos.findIndex((aluno) => aluno.id == id);
    if (index < 0) {
        return res.status(404).json({
            message: 'Aluno não encontrado',
        });
    }
    alunos.splice(index);
    return res.status(200).json({
        message: "Deu certo",
    });
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`rodando na porta ${port}`);
});
