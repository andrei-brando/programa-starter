interface Doce {
   nome: string;
   marca: string;
   pesoEmGramas: number;

   comer(qtdEmGramas: number): void;
}

class Chocolate implements Doce {
   nome: string;
   marca: string;
   pesoEmGramas: number = 110;

   constructor(nome: string, marca: string) {
      this.nome = nome;
      this.marca = marca;
   }

   comer(qtdEmGramas: number): void {
      this.pesoEmGramas -= qtdEmGramas;
      console.log(`Você comeu ${qtdEmGramas}g do chocolate, agora restam ${this.pesoEmGramas}g`);
   }
}

class Bala implements Doce {
   nome: string;
   marca: string;
   pesoEmGramas: number = 5;

   constructor(nome: string, marca: string) {
      this.nome = nome;
      this.marca = marca;
   }

   comer(qtdEmGramas: number): void {
      this.pesoEmGramas -= qtdEmGramas;
      console.log(`Você comeu ${qtdEmGramas}g da bala, agora restam ${this.pesoEmGramas}g`);
   }
}

const choco = new Chocolate('Suflair', 'Nestlé');
const bala = new Bala('7 Belo', 'Arcor');

choco.comer(42);
bala.comer(2);