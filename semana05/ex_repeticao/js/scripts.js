//#1
for (let i = 5; i <= 25; i++) {
   // console.log(i);
}

//# 2
for (let i = 10; i >= 1; i--) {
   // console.log(i);
}

//#3
for (let i = 1; i <= 10; i++) {
   // console.log(`${i}x6 = ${i*6}`);
}

//#4
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
// console.log(meses[0]);
// console.log(meses[meses.length-1]);

//#5
for (let i = meses.length - 1; i >= 0; i--) {
   // console.log(meses[i]);
}

for (mes of meses.reverse()) {
   // console.log(mes);
}

//#6
const notas = [];
for (let i = 1; i <= 10; i++) {
   notas.push((i * 8) + 3);
}
// console.log(notas);

//#7
let total = 0;
for (const nota of notas) {
   total += nota;
}
const media = total / notas.length;
// console.log(media);

//#8
let iterator = 1;
let arrayInteiros = [];
while (iterator <= 10) {
   arrayInteiros.push(iterator);
   iterator++;
}
// console.log(arrayInteiros);

const tenis = {
   cor: 'preto',
   marca: 'nike',
   tamanho: 42,
   teste: [],
   adicionar: function (valor) {
      this.teste.push(valor);
   },
   exibirCor() {
      console.log(`A cor é ${this.cor}`);
   }
}
// tenis.adicionar('outro teste');
// tenis.exibirCor();

const aluno = {
   nome: 'Andrei',
   sobrenome: 'Brando',
   idade: 18,
   notas: [],
   exibirNomeCompleto() {
      console.log(`${this.nome} - ${this.sobrenome}`);
   },
   adicionarNotas(nota) {
      this.notas.push(nota);
   },
   exibirMedia() {
      let media = 0;
      for (nota of this.notas) {
         media += nota;
      }
      media = media / this.notas.length;
      console.log(media);
      if (media > 7) {
         console.log('Passou de ano');
      } else {
         console.log('Reprovou');
      }
   },
   exibirTurma() {
      switch (this.idade) {
         case 15:
            console.log('1º ano');
            break;
         case 16:
            console.log('2º ano');
            break;
         case 17:
            console.log('3º ano');
            break;
         case 18:
            console.log('4º ano');
            break;
         default:
            break;
      }
   },
   exibirNotas() {
      for (nota of this.notas) {
         console.log(`Nota => ${nota}`);
      }
   }

}
aluno.exibirNomeCompleto();
aluno.adicionarNotas(10);
aluno.adicionarNotas(5);
aluno.adicionarNotas(10);
aluno.exibirMedia();
aluno.exibirTurma();
aluno.exibirNotas();