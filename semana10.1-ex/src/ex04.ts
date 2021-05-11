abstract class Ingresso {
   public valor: number = 50;

   retornarValorFinal():number {
      return this.valor;
   }
}

class Vip extends Ingresso {
   retornarValorFinal(): number {
      return this.valor += (15 * 100) / this.valor;
   }
}

class Camarote extends Ingresso {
   retornarValorFinal(): number {
      return this.valor += (30 * 100) / this.valor;
   }
}

class Pista extends Ingresso {
   retornarValorFinal(): number {
      return this.valor;
   }
}

const vip = new Vip();
const valorVip = vip.retornarValorFinal();
console.log(`Valor Vip: ${valorVip}`);

const camarote = new Camarote();
const valorCamarote = camarote.retornarValorFinal();
console.log(`Valor Camarote: ${valorCamarote}`);

const pista = new Pista();
const valorPista = pista.retornarValorFinal();
console.log(`Valor Pista: ${valorPista}`);
