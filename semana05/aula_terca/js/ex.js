// #1
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let index of array) {
   if (index % 2 === 0) {
      // console.log(index);
   }
}

// #2
let listaCompras = ['Feijão', 'Arroz', 'Batata', 'Cebola', 'Mostarda'];
// console.log(listaCompras.length);

// #3
let listaPrecos = [8.69, 6.44, 3.23, 2.9, 14.56]
let total = 0;
for (let item of listaPrecos) {
   total += item;
}
console.log(`Total ${total}`);

// #4
let valores = [2, 6, 3, 2, 14];
let totalMultiplicacao = 1;
for (let item of valores) {
   totalMultiplicacao = totalMultiplicacao *= item;
}
// console.log(`Total Multiplicação: ${totalMultiplicacao}`);

// #5
let arrayParaImprimir = [] ;
for (let i = 0; i < 5; i++) {
   // arrayParaImprimir.push(Number(prompt('Digite 1 número: ')));
}
// console.log(arrayParaImprimir);

// #6
let arrayParaImprimirNomes = [] ;
for (let i = 0; i < 5; i++) {
   // arrayParaImprimirNomes.push(prompt(`Digite o ${i+1}º nome: `));
}
// console.log(arrayParaImprimirNomes.reverse());

// #7
let contador = 3
let vezes = 0;
while (contador <= 50) {
   contador *= 4;
   if (contador >= 50) {
      break;
   }
   // console.log(contador);
   vezes++;
};

// #8
// console.log(`Foram necessárias ${vezes} multiplicações`);