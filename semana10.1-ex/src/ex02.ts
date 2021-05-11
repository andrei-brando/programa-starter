interface PessoaDadosEx02 {
   nome: string;
   idade: number;
   telefone: string;
}

abstract class PessoaEx02 {
   nome: string;
   idade: number;
   telefone: string;

   constructor(pessoa: PessoaDadosEx02) {
      this.nome = pessoa.nome;
      this.idade = pessoa.idade;
      this.telefone = pessoa.telefone;
   }

   andar(): void {
      console.log(`${this.nome} andou.`);
   }

   falar(): void {
      console.log(`${this.nome} está falando abóbrinha`);
   }

}

interface IFuncionario {
   cargo: string;
   salario: number;
}

class Funcionario extends PessoaEx02 {
   cargo: string;
   salario: number;

   constructor(funcionario: IFuncionario, pessoa: PessoaDadosEx02) {
      super(pessoa);
      this.cargo = funcionario.cargo;
      this.salario = funcionario.salario;
   }

   aumentarSalario(aumento: number):void {
      this.salario += aumento;
      console.log(`Seu novo salário é ${this.salario}`);
   }

   trocarCargo(novoCargo: string): void {
      this.cargo = novoCargo;
      console.log(`Seu novo cargo é: ${this.cargo}`);
   }
}

const pessoaEx02 = <PessoaDadosEx02>{
   nome: 'Andrei',
   idade: 23,
   telefone: '987654216',
};

const trabalhador = new Funcionario({ cargo: 'Desenvolvedor', salario: 50000,}, pessoaEx02);

console.log(trabalhador.nome);
console.log(trabalhador.idade);
trabalhador.andar();
trabalhador.falar();
trabalhador.aumentarSalario(15000);
trabalhador.trocarCargo('CTO');