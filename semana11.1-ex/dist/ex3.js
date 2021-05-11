"use strict";
class Quadrado {
    constructor(lado) {
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
class Retanglulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * (this.raio * this.raio);
    }
}
const quadrado = new Quadrado(7);
const retanglulo = new Retanglulo(7, 3);
const circulo = new Circulo(2);
console.log(`A área do quadrado é ${quadrado.calcularArea()}`);
console.log(`A área do retangulo é ${retanglulo.calcularArea()}`);
console.log(`A área do circulo é ${circulo.calcularArea()}`);
