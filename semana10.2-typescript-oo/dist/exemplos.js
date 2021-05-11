"use strict";
class Aluno {
    constructor(nome) {
        this.notas = [];
        this.nome = nome;
    }
    adicionarNota(nota) {
        this.notas.push(nota);
    }
    calcularMedia() {
        let total = 0;
        for (let nota of this.notas) {
            total += nota;
        }
        return total / this.notas.length;
    }
    exibirMedia() {
        console.log(`A média no aluno ${this.nome} é ${this.calcularMedia()}`);
    }
}
const aluno = new Aluno('Vinicius');
aluno.adicionarNota(10);
aluno.adicionarNota(8);
aluno.adicionarNota(9);
// aluno.exibirMedia();
// ============== // ================
class Bebida {
    constructor(tipo) {
        this.tipo = tipo;
    }
}
class BebidaAlcoolica extends Bebida {
    constructor(tipo, teor) {
        super(tipo);
        this.teorAlcoolico = teor;
    }
}
class Cerveja extends BebidaAlcoolica {
    constructor(tipo, teor, marca) {
        super(tipo, teor);
        this.marca = marca;
    }
}
const cerveja = new Cerveja('Fermentado', 5, 'Brahma');
const bebidaAlcoolica = new BebidaAlcoolica('Fermentado', 5);
const bebida = new Bebida('Fermentado');
class Animal {
    constructor(valores) {
        this.tamanho = valores.tamanho;
        this.tipo = valores.tipo;
    }
    correr() {
        console.log('Correndo...');
    }
    cacar() {
        this.correr();
        console.log('Caçando...');
    }
}
class Cachorro extends Animal {
    constructor(valores) {
        super(valores);
    }
}
class Gato extends Animal {
    constructor(valores) {
        super(valores);
    }
}
const dog = new Cachorro({
    tamanho: 100,
    tipo: 'Cachorro'
});
const cat = new Gato({
    tamanho: 80,
    tipo: 'Gato'
});
// dog.cacar();
// cat.cacar();
