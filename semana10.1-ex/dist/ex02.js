"use strict";
class PessoaEx02 {
    constructor(pessoa) {
        this.nome = pessoa.nome;
        this.idade = pessoa.idade;
        this.telefone = pessoa.telefone;
    }
    andar() {
        console.log(`${this.nome} andou.`);
    }
    falar() {
        console.log(`${this.nome} está falando abóbrinha`);
    }
}
class Funcionario extends PessoaEx02 {
    constructor(funcionario, pessoa) {
        super(pessoa);
        this.cargo = funcionario.cargo;
        this.salario = funcionario.salario;
    }
    aumentarSalario(aumento) {
        this.salario += aumento;
        console.log(`Seu novo salário é ${this.salario}`);
    }
    trocarCargo(novoCargo) {
        this.cargo = novoCargo;
        console.log(`Seu novo cargo é: ${this.cargo}`);
    }
}
const pessoaEx02 = {
    nome: 'Andrei',
    idade: 23,
    telefone: '987654216',
};
const trabalhador = new Funcionario({ cargo: 'Desenvolvedor', salario: 50000, }, pessoaEx02);
console.log(trabalhador.nome);
console.log(trabalhador.idade);
trabalhador.andar();
trabalhador.falar();
trabalhador.aumentarSalario(15000);
trabalhador.trocarCargo('CTO');
