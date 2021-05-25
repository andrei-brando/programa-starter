// #1
const ex = (valor: number) => {
   return new Promise((resolve, reject) => {
      if (valor != 3) {
         reject('deu errado');
      }
      resolve('deu certo');
   })
}

//ex(5).then(result => console.log(result)).catch(error => console.log(error));

// #2
const ex02 = (value: string) => {
   return new Promise((resolve, reject) => {
      if (value === 'oi') {
         reject('Promisse rejeitada');
      }
      resolve('Promisse deu certo');
   })
}

//ex02('Olá').then(result => console.log(result)).catch(error => console.log(error));

// #3
const myPromisse = (itShouldResolve: boolean) => {
   return new Promise((resolve, reject) => {
      if (!itShouldResolve) {
         reject('Promisse 03 rejeitada');
      }
      resolve('Promisse 03 deu certo');
   })
}

// myPromisse(false).then(result => console.log(result)).catch(error => console.log(error));

function soma(a: number, b: number) {
   let total = a + b;
   if (total % 2 != 0) {
      total++;
   }
   return total;
}

