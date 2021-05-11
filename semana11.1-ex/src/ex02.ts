interface Animal {
   patas: number;

   andar(): any;
}

class Raca {
   nomeRaca: string;

   constructor(nome: string) {
      this.nomeRaca = nome;
   }
}

class Cachorro implements Animal {
   nome: string;
   patas: number;
   raca: Raca;

   constructor(patas: number, nome: string, raca: Raca) {
      this.patas = patas;
      this.nome = nome;
      this.raca = raca;
   }
   andar() {
      console.log(`${this.nome} está andando`);
   }
}

class Gato implements Animal {
   nome: string;
   patas: number;
   raca: Raca;

   constructor(patas: number, nome: string, raca: Raca) {
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