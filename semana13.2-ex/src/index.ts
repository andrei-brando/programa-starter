// #1
function ex001() {
   return new Promise((resolve, reject) => {
      resolve(3);
   });
}

// ex001().then(result => console.log(result));

// #2
const ex02 = (value: string) => {
   return new Promise((resolve, reject) => {
      if (value === 'oi') {
         reject('Promisse rejeitada');
      }
      resolve('Promisse deu certo');
   })
}

function ex002() {
   return new Promise<void>((resolve, reject) => {
      reject('oi');
   })
}

//ex002().then(result => console.log(result)).catch(error => console.log(error));

// #3
function myPromisse(itShouldResolve: boolean) {
   return new Promise((resolve, reject) => {
      if (!itShouldResolve) {
         reject('Promisse rejeitada');
      }
      resolve('Promisse deu certo');
   });
}

//myPromisse(false).then(result => console.log(result)).catch(error => console.log(error));

// #4
function soma(a: number, b: number) {
   return new Promise((resolve, reject) => {
      const resultado = a + b;

      if (resultado % 2 === 0) {
         resolve('Par');
      } else {
         reject('Impar');
      }
   })
}

//soma(2, 2).then(r => console.log(r)).catch(e => console.log(e));

// #5
function job() {
   return new Promise(function (resolve, reject) {
      reject();
   });
}
let promise = job();

promise
   .then(function () {
      console.log('Success 1');
   })
   .then(function () {
      console.log('Success 2');
   })
   .then(function () {
      console.log('Success 3');
   })
   .catch(function () {
      console.log('Error 1');
   })
   .then(function () {
      console.log('Success 4');
   });

// Vai retornar -> Error 1
//                 Sucess 4