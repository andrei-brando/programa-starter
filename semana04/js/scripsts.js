// #1
const idade = 23;
// console.log(`Minha idade é ${idade}`);

// #2
const valor1 = 10;
const valor2 = 20;
let resultado = valor1 + valor2;
// console.log(resultado);
// alert(resultado);

// #3
const total = 150;
var parcelas = 2;
var valorParcela = total / parcelas;
// console.log(valorParcela);

// #4
let totalMinutos = 120;
let totalSegundos = 120 * 60;
// console.log(totalSegundos);

// #5
let totalCompra = 29;
let valorRecebido = 50;
let troco = valorRecebido - totalCompra;
// console.log(troco);

// #6
const nomeAluno = 'João';
const nota1 = 60;
const nota2 = 70;
const nota3 = 80;
const media = (nota1 + nota2 + nota3) / 3;
// console.log(`O aluno ${nomeAluno} ficou com média: ${media}`);

// #7
function acessoAoSite() {
   alert('Bem vindo ao site');
}
// acessoAoSite();

// #8
function mostrarMensagens() {
   const nomeAplicacao = 'Garupa';
   alert(`Acesso a aplicação ${nomeAplicacao}`);
   console.log(`Acesso a aplicação ${nomeAplicacao}`);
   alert(`Bem vindo a aplicação ${nomeAplicacao}`);
}
// mostrarMensagens();

// #9
function mostrarDobro(numero) {
   alert(`O dobro do número ${numero} é ${numero * 2}`);
}
// mostrarDobro(5);

// #10
function boasVindas(nome) {
   alert(`Boas vindas, ${nome}`);
}
// boasVindas('João');

// #11
function calcularMedia(nota1, nota2, nota3, nome) {
   console.log(`Nota 1: ${nota1}`);
   console.log(`Nota 2: ${nota2}`);
   console.log(`Nota 3: ${nota3}`);
   // console.log(`Nota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}`);
   alert(`${nome}, sua média é: ${(nota1 + nota2 + nota3) / 3}`);
}
// calcularMedia(60, 70, 80, 'João');

/*
 * === exatamente igual (tipo e valor) 
 * !=== exatamente diferente (tipo e valor)
*/
const resultado2 = 10 > 19 && 20 < 30 && 40 < 50;
// console.log(resultado2);

const resultado3 = 10 > 19 || 20 < 30 || 40 < 50;
// console.log(resultado3);

const resultado4 = !(10 != 11);
// console.log(resultado4);

const valorA = 100;
const valorB = 200;
const valorC = 300;
const valorD = 400;
const valorE = 500;
const valorF = 600;

// if ((valorC > valorB && valorB > valorA && valorA > valorB)) {
//    console.log('Que não vai dar o que?');
// } else {
//    console.log('Não vai dar não');
// }

switch (true) {
   case valorA > valorB:
      console.log('é maior B');
      break;
   case valorA > valorC:
      console.log('é maior C');
      break;
   case valorA > valorD:
      console.log('é maior D');
      break;
   case valorA > valorE:
      console.log('é maior E');
      break;
   case valorA > valorF:
      console.log('é maior F');
      break;
   default:
      console.log('não é maior');
      break;
}