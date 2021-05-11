"use strict";
class Chocolate {
    constructor(nome, marca) {
        this.pesoEmGramas = 110;
        this.nome = nome;
        this.marca = marca;
    }
    comer(qtdEmGramas) {
        this.pesoEmGramas -= qtdEmGramas;
        console.log(`Você comeu ${qtdEmGramas}g do chocolate, agora restam ${this.pesoEmGramas}g`);
    }
}
class Bala {
    constructor(nome, marca) {
        this.pesoEmGramas = 5;
        this.nome = nome;
        this.marca = marca;
    }
    comer(qtdEmGramas) {
        this.pesoEmGramas -= qtdEmGramas;
        console.log(`Você comeu ${qtdEmGramas}g da bala, agora restam ${this.pesoEmGramas}g`);
    }
}
const choco = new Chocolate('Suflair', 'Nestlé');
const bala = new Bala('7 Belo', 'Arcor');
choco.comer(42);
bala.comer(2);
