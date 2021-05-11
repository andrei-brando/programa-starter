/**
 * Criar classe Pessoa com:
 *    - nome
 *    - idade
 *    - notas array vazio
 *    - metodo adicionar nota
 *    - metodo buscar menor nota
 *    - metodo buscar maior nota
 * 
 * Fora da classe, buscar o aluno com a maior e a menor nota
 */

class Pessoa {
   nome: string;
   idade: number;
   notas: number[] = [];

   constructor(nome: string, idade: number,) {
      this.nome = nome;
      this.idade = idade;
   }

   adicionarNota(nota: number): void {
      this.notas.push(nota);
   }

   buscarMenorNota(): number {
      let notaMenor: number = 11;
      for (const nota of this.notas) {
         if (nota < notaMenor) {
            notaMenor = nota;
         }
      }
      return notaMenor;
   }

   buscarMaiorNota(): number {
      let notaMaior = 0;

      for (const nota of this.notas) {
         if (nota > notaMaior) {
            notaMaior = nota;
         }
      }

      return notaMaior;
   }
}

var pessoa1 = new Pessoa('Andrei', 23);
pessoa1.adicionarNota(5);
pessoa1.adicionarNota(9);
pessoa1.adicionarNota(7);

var pessoa2 = new Pessoa('Jeferson', 28);
pessoa2.adicionarNota(2);
pessoa2.adicionarNota(4);
pessoa2.adicionarNota(8);

var pessoa3 = new Pessoa('Tiago', 30);
pessoa3.adicionarNota(3);
pessoa3.adicionarNota(6);
pessoa3.adicionarNota(10);

const alunos: Pessoa[] = [];
alunos.push(pessoa1);
alunos.push(pessoa2);
alunos.push(pessoa3);

let melhorNota = 0;
let piorNota = 10;

for (const aluno of alunos) {
   const maior = aluno.buscarMaiorNota();
   const menor = aluno.buscarMenorNota();

   if (maior > melhorNota) {
      melhorNota = maior;
   }
   if (menor < piorNota) {
      piorNota = menor;
   }
}

console.log(melhorNota, piorNota);