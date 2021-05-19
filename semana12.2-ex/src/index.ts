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

// #12
app.post('/adicionar-time', (req: Request, res: Response) => {
   const { nome, ano, estado } = req.body;

   if (!nome || !ano || !estado) {
      return res.status(404).json({
         sucess: false,
         message: 'Todos os dados devem ser informados'
      });
   }

   // a fazer
   
   return res.status(200).json({
      sucess: true,
      data: {
         // anoInNumber: anoInNumber,
         // nomeAsc: ascToNumber,
      },
      message: 'Graças a Deus, consegui'
   });
});

// #13
app.post('/adicionar-valores-calculo', (req: Request, res: Response) => {
   const dados: Object = req.body;

   let numeros: Array<number> = Object.values(dados);

   numeros.forEach((value) => {
      if (typeof value !== 'number') {
         return res.status(400).json({
            sucess: false,
            message: 'Algum dos valores digitados não é um número'
         });
      }
   });

   let inteiro = numeros.filter((value) => {
      return !(value.toString().includes('2') || value.toString().includes('4'));
   }).reduce((a, b) => a + b);

   let pares: number = 0;
   let impares: number = 0;


   for (let i = 0; i <= inteiro; i++) {
      i % 2 === 0 ? pares++ : impares++;
   }

   return res.status(200).json({
      sucess: true,
      soma: `A soma é: ${inteiro}`,
      pares: `Quantidade de pares: ${pares}`,
      impares: `Quantidade de pares: ${impares}`
   });
});

// #14
let pontos: Array<any> = [];

app.post('/cadastrar-milhas', (req: Request, res: Response) => {
   const { usuarioId, milhas, data } = req.body;

   if (!usuarioId || !milhas || !data || data.length < 10) {
      return res.status(400).json({
         sucess: false,
         message: 'Todos os dados devem ser preenchidos'
      });
   }

   var ano: string = data.substring(6).match(/\d+/gi)?.join('');

   if (ano.length < 4) {
      return res.status(400).json({
         sucess: false,
         message: 'Ano está incorreto'
      });
   }

   if (parseInt(ano) != 2020) {
      return res.status(200).json({
         sucess: true,
         message: 'Ano não considerado'
      });
   }

   const index = pontos.findIndex((e) => e.usuarioId == usuarioId);

   if (index < 0) {
      pontos.push({
         usuarioId,
         milhas,
         data
      });

      return res.status(200).json({
         sucess: true,
         message: 'Milhas adicionadas',
      });
   } else {
      const novasMilhas = pontos[index].milhas + milhas;
      const novoUser = {
         usuarioId,
         milhas: novasMilhas,
         data,
      }

      pontos.splice(index, 1, novoUser);

      if (novasMilhas % 120000 == 0) {
         return res.status(200).json({
            sucess: true,
            data: novoUser,
            message: 'Você possui pontos para trocar hehe',
         });
      }
   }
});

// #15
app.post('/cadastrar-tentativas', (req: Request, res: Response) => {
   const { numeroTentativas, numeroAcertos } = req.body;

   const apv: number = Number(((numeroAcertos * 100) / numeroTentativas).toFixed());

   let message = '';

   if (apv >= 0 && apv < 40) {
      message = 'Você precisa melhorar.';
   } else if (apv >= 40 && apv < 60) {
      message = 'Muito bom, mas ainda pode ser melhor.';
   } else if (apv >= 60 && apv < 90) {
      message = 'Parabéns, seu aproveitamento é acima da média';
   } else if (apv >= 90 && apv < 99) {
      message = 'Parabéns, você está entre os melhores';
   } else {
      message = 'Parabéns, você é o MELHOR';
   }

   return res.status(200).json({
      sucess: true,
      aproveitamento: apv,
      message
   });
});

app.listen(8080, () => {
   console.log('Rodando na porta 8080');
});