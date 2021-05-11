// #1
abstract class Midia {
   public musica: string = '';
   public filme: string = '';
   public emExecucao: boolean = false;

   reproduzir() {
      console.log('Midia está rodando');
   }
}

class DVD extends Midia {
   reproduzir() {
      console.log('DVD está rodando');
   }
}

class CD extends Midia {
   reproduzir() {
      console.log('CD está rodando');
   }
}

const cd = new CD();
const dvd = new DVD();

cd.reproduzir();
dvd.reproduzir();