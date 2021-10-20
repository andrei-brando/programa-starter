import { Database } from './database';
import { DatabaseSingleton } from './database_singleton';

const database1 = new Database();
database1.setName('Andrei');
const name1 = database1.getName();

console.log(name1);

const database2 = new Database();
// database2.setName('Andrei');
const nome2 = database2.getName();

console.log(nome2);

// if (database1 === database2) {
//   console.log('São iguais, faz tal coisa');
// } else {
//   console.log('Pq não são iguais?');
// }
// if (database1 === database2) {
//   console.log('São iguais, faz tal coisa');
// } else {
//   console.log('Pq não são iguais?');
// }

const singleton1 = DatabaseSingleton.getInstance();
const singleton2 = DatabaseSingleton.getInstance();

// if (singleton1 === singleton2) {
//   console.log('São iguais, faz tal coisa');
// } else {
//   console.log('Pq não são iguais?');
// }

singleton1.setName('Alexa');
const singletonName = singleton1.getName();
const singletonName2 = singleton2.getName();

console.log(singletonName);
console.log(singletonName2);
