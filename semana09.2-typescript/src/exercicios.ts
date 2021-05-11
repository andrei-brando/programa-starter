// #1
for (let i = 2; i <= 20; i++) {
   // console.log(i);
}

// #2
for (let i = 10; i >= 0; i--) {
   // console.log(i);
}

// #3
for (let i = 1; i <= 10; i++) {
   // console.log(`${i} x 7 = ${i * 7}`);
}

// #4
const months = [
   'Janeiro',
   'Fevereiro',
   'Março',
   'Abril',
   'Maio',
   'Junho',
   'Julho',
   'Agosto',
   'Setembro',
   'Outubro',
   'Novembro',
   'Dezembro',
];
// console.log(months[0]);
// console.log(months[months.length-1]);

// #5
for (const month of months.reverse()) {
   // console.log(month);
}

// #6
const notas = [];
for (let i = 0; i < 10; i++) {
   notas.push(Number((Math.random() * 10).toFixed(0)));
}
for (const nota of notas) {
   // console.log(nota);
}

// #7
const media = notas.reduce((a, b) => a + b) / 10;
// console.log(media);

// #8
let n = 1;
const array = [];
while (n <= 10) {
   array.push(n);
   n++;
}
console.log(array);