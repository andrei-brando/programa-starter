// Desestruturação
const frutas = ['banana', 'uva', 'morango'];
const [v1, v2, v3] = frutas;

// console.log(v1, v2, v3);

const pessoa = {
   nome: 'Andrei',
   idade: 23,
   cidade: 'Sapiranga',
}

const {nome, cidade} = pessoa;

// console.log(nome, idade, cidade);

// import exibirOutraMensagem, { nome2 } from './exemplo';

// exibirOutraMensagem();
// console.log(nome2);

import Estacionamento from './Estacionamento';

const estacionamento = new Estacionamento();

import * as temp from './exemplo';

// API -> application programming interface