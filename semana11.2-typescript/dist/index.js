"use strict";
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/**
 * MAP
 * - percorre cada item do array e devolve UM NOVO ARRAY DE MESMO TAMANHO
 * - segundo parâmetro OPCIONAL, que é o index (posição do elemento)
 *
 */
const valoresMap = valores.map((value) => value * 2);
// const valoresMap = valores.map((value, index) => { 
//    console.log(index);
//    return value * 2
// });
// console.log(valores, valoresMap);
/**
 * REDUCE
 * - executa uma função para cada elemento e retorna um valor único
 */
const valoresReduce = valores.reduce((total, item) => total + item);
// console.log(valoresReduce);
/**
 * FILTER
 * - executa um teste pra cada item do array e se passar no teste retorna o item
 */
const textos = ['Andrei', 'Grêmio', '7x0'];
const valoresFilter = valores.filter((valor) => valor % 2 === 0);
const valorTexto = textos.filter((texto) => texto.length > 5);
// console.log(valoresFilter);
// console.log(valorTexto);
/**
 * FIND
 * - IGUAL o filter, porém retorna apenas o primeiro
 */
const valoresFind = valores.find((valor) => valor % 2 === 0);
//  console.log(valoresFind);
/**
 * FOR EACH
 * - substituto do  -> for OF
 * - segundo parâmetro opcional -> INDEX
 */
// valores.forEach((valor) => console.log(valor));
/*****************
 * Exercícios
 */
// #1
const array = [5, 7, 8, 10, 1, 6, 2, 3, 9, 4];
const arrayEx01 = array.map((value) => {
    if (value % 2 === 0) {
        return value * value;
    }
    else {
        return value * 5;
    }
});
// console.log(arrayEx01);
// #2
// const arrayEx02 = array.filter((valor) => {
//    if (valor == 1) return true;
//    if (valor == 2) return true;
//    let qtdDiv = 0
//    for (let i = 1; i <= valor; i++) {
//       if (valor % i === 0) {
//         qtdDiv++;
//       }
//    }
//    if (qtdDiv > 2) {
//       return false;
//    }
//    return true;
// });
const arrayEx02 = array.filter((valor) => {
    for (let i = 2; i < valor; i++) {
        if (valor % i === 0) {
            return false;
        }
    }
    return valor > 1;
});
// console.log(arrayEx02);
// #3
const arrayEx03 = array.find((valor) => valor * 5 > 20);
// console.log(arrayEx03);
// #4
// const arrayEx04 = array.filter((valor) => valor % 2 == 0);
// const total = arrayEx04.reduce((a, b) => a + b);
const total = array.reduce((total, item, index) => item % 2 === 0 ? total + item : total);
console.log(total);
// #5
let arrayEx05 = array.reduce((total, item) => item > total ? item : total);
console.log(arrayEx05);
