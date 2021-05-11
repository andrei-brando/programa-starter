"use strict";
// #1
class Midia {
    constructor() {
        this.musica = '';
        this.filme = '';
        this.emExecucao = false;
    }
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
