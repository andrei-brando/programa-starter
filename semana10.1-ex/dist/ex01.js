"use strict";
class Pessoa {
    constructor(pessoa) {
        this.recuperarCpf = () => this.cpf;
        this.nome = pessoa.nome;
        this.idade = pessoa.idade;
        this.cpf = pessoa.cpf;
        this.telefone = pessoa.telefone;
        this.altura = pessoa.altura;
        this.peso = pessoa.peso;
    }
    andar() {
        this.peso -= 0.2;
        console.log(`${this.nome} andou e perdeu 200g, agora está com ${this.peso}kg`);
    }
    falar() {
        console.log(`${this.nome} está falando abóbrinha`);
    }
    comer() {
        this.peso += 0.5;
        console.log(`${this.nome} engordou 500g e agora está com ${this.peso}kg`);
    }
    fazerAniversario() {
        this.idade++;
        console.log(`${this.nome} fez aniversário e agora está com ${this.idade} anos`);
    }
}
const dados = {
    nome: 'Andrei',
    idade: 23,
    cpf: '123.456.789-21',
    telefone: '(51)-99688-7798',
    altura: 1.70,
    peso: 63.0,
};
const pessoa = new Pessoa(dados);
pessoa.andar();
pessoa.falar();
const cpf = pessoa.recuperarCpf();
console.log(`CPF: ${cpf}`);
pessoa.comer();
pessoa.fazerAniversario();
