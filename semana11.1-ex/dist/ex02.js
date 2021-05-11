"use strict";
class Raca {
    constructor(nome) {
        this.nomeRaca = nome;
    }
}
class Cachorro {
    constructor(patas, nome, raca) {
        this.patas = patas;
        this.nome = nome;
        this.raca = raca;
    }
    andar() {
        console.log(`${this.nome} está andando`);
    }
}
class Gato {
    constructor(patas, nome, raca) {
        this.patas = patas;
        this.nome = nome;
        this.raca = raca;
    }
    andar() {
        console.log(`${this.nome} está andando`);
    }
}
const dogGolden = new Cachorro(4, 'Leona', new Raca('Golden'));
const gatoPersa = new Cachorro(4, 'Lulu', new Raca('Persa'));
dogGolden.andar();
gatoPersa.andar();
