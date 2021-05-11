"use strict";
// #1
function acessoAoSite() {
    console.log('Bem-vindo ao site');
}
acessoAoSite();
// #2
function mostrarMensagem() {
    const nomeAplicacao = 'GrowApp';
    console.log(`Acesso à aplicação ${nomeAplicacao}`);
    console.log(`Bem-vindo à aplicação ${nomeAplicacao}`);
}
mostrarMensagem();
// #3
function mostrarDobro(n) {
    console.log(`O dobro do número ${n} é ${n * 2}`);
}
mostrarDobro(5);
// #4
function boasVindas(nome) {
    console.log(`Seja bem-vindo, ${nome}`);
}
boasVindas('Pedro');
// #5
function calcularMedia(nota1, nota2, nota3, nome) {
    const media = (nota1 + nota2 + nota3) / 3;
    console.log(`${nome}, sua média é ${media}`);
    console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}`);
}
calcularMedia(60, 70, 80, 'Pedro');
