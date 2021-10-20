import { NoSingleton } from './no_singleton';
import { Singleton } from './singleton';

console.log('Design Patters - Singleton');

const noSingleton1 = new NoSingleton();
const noSingleton2 = new NoSingleton();

noSingleton1.setName('Andrei');
noSingleton2.setName('Andrei');

console.log('-------------------||------------------');

if (noSingleton1 === noSingleton2) {
  console.log('NoSingleton IGUAL');
} else {
  console.log('NoSingleton DIFERENTE');
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton1.setName('Alexa');

const name1 = singleton1.getName();
const name2 = singleton2.getName();

console.log('-----------||-------------');

console.log(name1, name2);

if (singleton1 === singleton2) {
  console.log('Singleton IGUAL');
} else {
  console.log('Singleton DIFERENTE');
}
