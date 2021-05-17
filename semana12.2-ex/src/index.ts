import express, { Request, Response } from 'express';
import { stringify, v4 as uuidGenerator } from 'uuid';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
   return res.send('rota inicial');
});

// #1
app.get('/calculadora/:operacao', (req, res) => {
   const { operacao } = req.params;
   const valorA = Number(req.query.valorA);
   const valorB = Number(req.query.valorB);
   let valorFinal: number = 0;

   switch (operacao.toString()) {
      case 'somar':
         valorFinal = valorA + valorB;
         break;
      case 'subtrair':
         valorFinal = valorA - valorB;
         break;
      case 'multiplicar':
         valorFinal = valorA * valorB;
         break;
      case 'dividir':
         valorFinal = valorA / valorB;
         break;
   }

   return res.send(`valor final é: ${valorFinal}`);
});

// #2
let counter: number = 0;
app.get('/counter', (req, res) => {
   counter++;
   if (counter === 10) {
      counter = 0;
      return res.send('Chegou a 10');
   }
   return res.send('');
});

// #3
app.get('/numeral/:numero', (req: Request, res: Response) => {
   let { numero } = req.params;
   const { operacao } = req.query;
   let number = Number(numero);

   if (operacao?.toString() === 'anterior') {
      return res.send(`Valor anterior: ${number -= 1}`);
   }

   return res.send(`Próximo valor: ${number += 1}`);
});

// #4
app.get('/inverter-string', (req: Request, res: Response) => {
   const { valor } = req.query;
   let newValue: string = valor?.toString().split('').reverse().toString() ?? '';
   for (let i = 0; i < newValue.length; i++) {
      newValue = newValue.replace(',', '');
   }

   return res.send(`Novo valor: ${newValue}`);
});

// #5
let array: Array<string> = [];
app.get('/remover-vogais', (req: Request, res: Response) => {
   const { valor } = req.query;

   let newValue: string = valor?.toString().replace(/[aeiouà-ú]/gi, '') ?? '';

   array.push(newValue);

   return res.status(200).json({
      data: {
         array: array,
      }
   });
});

// #6
class Pessoa {
   public id: number;
   public nome: string;
   public idade: number;
   public cpf: string = '';

   constructor(id: number, nome: string, idade: number, cpf: string) {
      this.id = id;
      this.nome = nome;
      this.idade = idade;
      this.cpf = cpf;
   }

   inverterNome(): void {
      let newValue = this.nome.split('').reverse().toString();
      for (let i = 0; i < newValue.length; i++) {
         newValue = newValue.replace(',', '');
      }
      this.nome = newValue;
   }
}

let arrayPessoa: Array<Pessoa> = [];

app.get('/adicionar-pessoa', (req: Request, res: Response) => {
   const nome = req.query.nome;
   const idade = Number(req.query.idade);
   let id: number = 0;

   if (arrayPessoa.length === 0) {
      id = 1;
   } else {
      id = arrayPessoa?.length + 1
   }

   const pessoa = new Pessoa(id, nome?.toString() ?? '', idade, '');

   arrayPessoa.push(pessoa);

   return res.send('Pessoa salva');
});

// #7
app.get('/exibir-pessoa/:id', (req: Request, res: Response) => {
   const { id } = req.params;

   const pessoa = arrayPessoa.find((pessoa) => pessoa.id == parseInt(id));

   return res.status(200).json({
      sucess: true,
      data: pessoa,
   });
});

// #8
app.get('/exibir-pessoas', (req: Request, res: Response) => {
   return res.status(200).json({
      sucess: true,
      data: arrayPessoa,
   });
});

// #9
app.get('/remover-pessoa/:id', (req: Request, res: Response) => {
   const { id } = req.params;

   const idPessoa = arrayPessoa.findIndex((pessoa) => pessoa.id == parseInt(id));

   if (idPessoa > 0) {
      arrayPessoa.splice(idPessoa, 1);
   }

   return res.status(200).json({
      sucess: true,
      data: arrayPessoa,
   });
});

// #10
app.get('/inverter-nomes-pessoas', (req: Request, res: Response) => {
   arrayPessoa.forEach((pessoa) => pessoa.inverterNome());

   return res.status(200).json({
      sucess: true,
      data: arrayPessoa,
   });
});

// #11
app.post('/adicionar-pessoa', (req: Request, res: Response) => {
   const { id, nome, cpf, idade } = req.body;

   let pessoaPeloId = arrayPessoa.find((pessoa) => pessoa.id == id);

   if (pessoaPeloId) {
      return res.status(400).json({
         sucess: true,
         message: 'Pessoa já cadastrada'
      });
   }

   let pessoaPeloCpf = arrayPessoa.find((pessoa) => pessoa.cpf == cpf);

   if (pessoaPeloCpf) {
      return res.status(400).json({
         sucess: true,
         message: 'Pessoa já cadastrada'
      });
   }

   const novaPessoa = new Pessoa(id, nome, idade, cpf);

   arrayPessoa.push(novaPessoa);

   return res.send('Pessoa salva');
});


app.listen(8080, () => {
   console.log('Rodando na porta 8080');
});