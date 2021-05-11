/*
 * Array
*/
const backEnd = ['JS', 'GO', 'Python'];
// const backEnd = [];
// backEnd[0] = 'JS';
// backEnd[1] = 'GO';
// backEnd[2] = 'Python';
// console.log(backEnd, backEnd.length, backEnd[backEnd.length-1]);

/*
  * array associativo
*/
const linguagens = [];
linguagens['backend'] = ['JS', 'GO', 'Python'];
linguagens['frontend'] = ['React', 'Angular', 'Vue'];

// console.log(linguagens);

// console.log(Array.isArray(linguagens));
// console.log(linguagens instanceof Array);

/*
 * Ordenar Array
*/
const times = ['Juventude', 'Caxias', 'Grêmio', 'Novo Hamburgo'];
// console.log(times.sort()); // ordenação crescente
// console.log(times.reverse()); // ordenação decrescente

/**
 * Exibir os valores como string
 */
// console.log(times.toString());
// console.log(times.sort().join(' - '));

// times.pop(); // remover ultima posição
// console.log(times);

// times.shift(); // remove a primeira posição
// console.log(times);

// times[0] = null; // seta null na posição
// delete times[0]; // remove valor, mas mantém a posição
// console.log(times);

/**
 * adicionar itens
 */
// times[0] = 'Novo Hamburgo';
// times[8] = 'São José';
// console.log(times);

times.push('São José'); // adiciona o valor na última posição
// console.log(times);

times.unshift('Pelotas');
// console.log(times);

const index = times.indexOf('Grêmio');
// console.log(times, index);

const timesSP = ['Palmeiras', 'Santos', 'São Paulo'];
const todosTimes = times.concat(timesSP);
// console.log(todosTimes.sort());

/**
 * Laços de repetição
 */
for (let i = 0; i <= 10; i++) {
   // console.log(i);
}

for (let i = 0; i < times.length; i++) {
   // console.log(times[i]);
}

for (let time of times) { // retorna os elementos
   // console.log(time);
   if (time === 'Grêmio') {
      break; // para a execução do for
   }
}

for (let time in times) {
   if (time == 3) {
      continue; // para a execução da iteração atual e continua a próxima
   }
   // console.log(time);
}