//Promise

// function somar() {
//    let resultado = 2 + 2;

//    if (resultado === 4) {
//       sucesso();
//    } else {
//       erro();
//    }
// }

// function sucesso() {
//    console.log('sucesso');
// }

// function erro() {
//    console.log('erro');
// }

// let promise = new Promise((resolve, reject) => {
//    let resultado = 2 + 2;

//    if (resultado === 4) {
//       resolve('Sucesso');
//    } else {
//       reject();
//    }
// });

// promise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));

// function somar() {
//    return new Promise((resolve, reject) => {
//       let resultado = 2 + 2;

//       if (resultado === 4) {
//          resolve('Sucesso');
//       } else {
//          reject();
//       }
//    });
// }

// somar().then(resultado => console.log(resultado)).catch(erro => console.log(erro));

// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.send(null);
// xhr.onreadystatechange = () => {
//    if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.responseText));
//    }
// }

// const promise = () => {
//    return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();

//       xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
//       xhr.send(null);

//       xhr.onreadystatechange = () => {
//          if (xhr.readyState === 4) {

//             if (xhr.status === 200) {
//                resolve(JSON.parse(xhr.responseText));
//             } else {
//                reject('Falhou');
//             }
//          }
//       }
//    });
// }

// promise().then(dados => console.log(dados)).catch(erro => console.log(erro));

import axios from 'axios';


axios.get('https://jsonplaceholder.typicode.com/users')
   .then(response => console.log(response.data))
   .catch(error => console.log(error));


async function buscarDados() {
   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
   console.log(response);
}
buscarDados();
console.log('aqui');
