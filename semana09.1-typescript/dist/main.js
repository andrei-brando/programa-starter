"use strict";
// #1 autocomplete
// const person = {
//    name: 'Andrei',
// }
// console.log(person.name);
// #2 - tipos
// let club: string = 'Grêmio';
// let year: number = 1902;
// let best: boolean = true;
// console.log(club, year, best);
// let person : {
//    name: string,
//    age: number,
// }
// person = {
//    name: 'Andrei',
//    age: 23,
// }
// console.log(person.name, person.age);
// #3 tipo nos parametros e no retorno das funções
// function somar(a: number, b: number) : number {
//    return a + b;
// }
// const resultado = somar(1, 1);
// console.log(resultado);
// #4 enums
// enum Ages {
//    Kid = 5,
//    Young = 14,
//    Adult,
//    Old,
// }
// const person = {
//    age: 14,
// }
// switch (person.age) {
//    case Ages.Kid:
//       break;
//    case Ages.Young:
//       break;
//    default:
//       break;
// }
// #5 - functions
// function somar(a: number, b: number = 10): number {
//    return a + b;
// }
// function somar(...valores: Array<number>): number {
//    return a + b;
// }
// const resultado = somar(10);
// console.log(resultado);
// const somar = function (a: number, b: number): number {
//    return a + b;
// }
// arrow function
// const somar = (a: number, b: number): number => a + b;
// const somarArrowMaisUmaLinha = (a: number, b: number): number => { 
//    return a + b 
// };
// somar(12, 12);
// #6 orientação a objetos (classes)
// class Person {
//    public name: string;
//    public age: number = 20;
//    constructor(name: string, age: number,) {
//       this.name = name;
//       this.age = age;
//    }
// }
// const person1 = new Person('Andrei', 23);
// const person2 = new Person('Vini', 38);
class Automovel {
    constructor(placa) {
        this.placa = placa;
    }
}
class Carro extends Automovel {
    constructor(placa, modelo) {
        super(placa);
        this.modelo = modelo;
        console.log(this.placa);
    }
}
class Moto extends Automovel {
    constructor(placa, modelo) {
        super(placa);
        this.modelo = modelo;
    }
    exibirModelo() {
        console.log(this.modelo);
    }
}
const carro = new Carro('III-000', 'Fusca');
// console.log(carro.placa);
const moto = new Moto('III-001', 'CG');
moto.exibirModelo();
