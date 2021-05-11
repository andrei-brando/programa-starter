"use strict";
// #1
function acessoAoSite() {
    console.log('Bem-vindo ao site');
}
//acessoAoSite();
// #2
function mostrarMensagem() {
    const app = 'Nome do App';
    console.log(`Acesso à aplicação ${app}`);
}
//mostrarMensagem();
// #3
function mostrarDobro(numero) {
    console.log(numero * 2);
}
// mostrarDobro(10);
// #4
function boasVindas(nome) {
    console.log(`${nome} seja bem-vindo`);
}
function calcularMedia(valores) {
    const { nota1, nota2, nota3, nome } = valores;
    const media = (nota1 + nota2 + nota3) / 3;
    console.log(`${nome}, sua média é ${media}`);
    console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}.`);
}
// calcularMedia({
//     nota1: 10, 
//     nota2: 9, 
//     nota3: 8, 
//     nome: 'Vinicius'
// });
