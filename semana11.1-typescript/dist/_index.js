"use strict";
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
class Cachorro {
    constructor() {
        this.nome = 'Buzz';
    }
    andar(distancia) {
        return `O animal andou ${distancia} metros`;
    }
}
class Gato {
    constructor() {
        this.nome = 'Adolfo';
    }
    andar(distancia) {
        return `O animal andou ${distancia} metros`;
    }
}
function vaiProVeterinário(animal) {
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
    constructor() {
        this.nome = 'Andrei';
    }
}
const jogador = new Jogador0();
class Jogo {
    constructor(jogador) {
        this.jogador = jogador;
    }
}
const jogo = new Jogo(jogador);
