interface PessoaDados {
   nome: string;
   idade: number;
   cpf: string;
   telefone: string;
   altura: number;
   peso: number;
}

class Pessoa {
   nome: string;
   idade: number;
   cpf: string;
   telefone: string;
   altura: number;
   peso: number;

   constructor(pessoa: PessoaDados) {
      this.nome = pessoa.nome;
      this.idade = pessoa.idade;
      this.cpf = pessoa.cpf;
      this.telefone = pessoa.telefone;
      this.altura = pessoa.altura;
      this.peso = pessoa.peso;
   }

   andar(): void {
      this.peso -= 0.2;
      console.log(`${this.nome} andou e perdeu 200g, agora está com ${this.peso}kg`);
   }

   falar(): void {
      console.log(`${this.nome} está falando abóbrinha`);
   }

   recuperarCpf = ():string => this.cpf;

   comer():void {
      this.peso += 0.5;
      console.log(`${this.nome} engordou 500g e agora está com ${this.peso}kg`);
   }

   fazerAniversario():void {
      this.idade++;
      console.log(`${this.nome} fez aniversário e agora está com ${this.idade} anos`);
   }
}

const dados = <PessoaDados>{
   nome: 'Andrei',
   idade: 23,
   cpf: '123.456.789-21',
   telefone: '(51)-99688-7798',
   altura: 1.70,
   peso: 63.0,
}

const pessoa = new Pessoa(dados);

pessoa.andar();
pessoa.falar();
const cpf: string = pessoa.recuperarCpf();
console.log(`CPF: ${cpf}`);
pessoa.comer();
pessoa.fazerAniversario();