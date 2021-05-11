interface AreaCalculavel {
   calcularArea(): number;
}

class Quadrado implements AreaCalculavel {
   lado: number;
   constructor(lado: number) {
      this.lado = lado;
   }
   calcularArea(): number {
      return this.lado * this.lado;
   }
}

class Retanglulo implements AreaCalculavel {
   base: number;
   altura: number;
   constructor(base: number, altura: number) {
      this.base = base;
      this.altura = altura;
   }
   calcularArea(): number {
      return this.base * this.altura;
   }
}

class Circulo implements AreaCalculavel {
   raio: number;
   constructor(raio: number) {
      this.raio = raio;
   }
   calcularArea(): number {
      return Math.PI * (this.raio * this.raio);
   }
}

const quadrado = new Quadrado(7);
const retanglulo = new Retanglulo(7, 3);
const circulo = new Circulo(2);

console.log(`A área do quadrado é ${quadrado.calcularArea()}`);
console.log(`A área do retangulo é ${retanglulo.calcularArea()}`);
console.log(`A área do circulo é ${circulo.calcularArea()}`);