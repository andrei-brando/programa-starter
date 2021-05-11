/**
 *  Classe
 *   construtor -> passar valores
 *   propriedades -> variáveis dentro da classe
 *   métodos -> funções dentro da classe
 * 
 * 
 *  Herança (extends)
 *   
 *  Modificadores (public, private, protected)
 * 
 *  Classe Abstrata
 * 
 *  Interface
 *    - Tipo
 *    - Contrato
 * 
 *  Composição
 * 
 *  Polimorfismo
 */

// class Pessoa {
//    private nome: string;

//    constructor(nome: string) {
//       this.nome = nome;
//    }

//    exibirNome = (): void => console.log(this.nome);
// }

// const pessoa = new Pessoa('Andrei');
// // pessoa.exibirNome();

// abstract class Animal {
//    private tipo: string;

//    constructor(tipo: string) {
//       this.tipo = tipo;
//    }

//    exibirTipo = () => console.log(this.tipo);
// }

// class Cachorro extends Animal {
//    private nome: string;
//    constructor(tipo: string, nome: string) {
//       super(tipo);
//       this.nome = nome;
//    }
// }

// class Gato extends Animal {
//    constructor(tipo: string) {
//       super(tipo);
//    }
// }

// const dog = new Cachorro('Cão', 'Buzz');
// dog.exibirTipo();

// const cat = new Gato('Gato');

//

// 
// NÃO TEM MUITO A VER
//
// interface ValoresEntrada {
//    nome: string,
//    idade: number,
//    cidade: string,
//    estado: string
// }

// interface Saida {
//    resultado: number,
// }

// class Calculadora {
//    private nome: string;
//    private valores: ValoresEntrada;

//    constructor(parametros: ValoresEntrada) {
//       this.nome = parametros.nome;
//       this.valores = parametros;
//    }

//    soma(): Saida {
//       return {
//          resultado: 1 + 1,
//       }
//    }
// }

interface Animal {
   nome: string;
   andar(distancia: number): string;
}

class Cachorro implements Animal {
   nome: string = 'Buzz';

   andar(distancia: number): string {
      return `O animal andou ${distancia} metros`;
   }
}

class Gato implements Animal {
   nome: string = 'Adolfo';

   andar(distancia: number): string {
      return `O animal andou ${distancia} metros`;
   }
}

function vaiProVeterinário(animal: Animal) {
   animal.andar(100);
}

const dog = new Cachorro();
const cat = new Gato();

vaiProVeterinário(dog);
vaiProVeterinário(cat);

///
///
///

class Jogador0 {
   nome = 'Andrei';
}
const jogador = new Jogador0();

class Jogo {
   private jogador: Jogador0;

   constructor(jogador: Jogador0) {
      this.jogador = jogador;
   }
}
const jogo = new Jogo(jogador);