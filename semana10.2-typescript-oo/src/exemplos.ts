class Aluno {
    public nome: string;
    public notas: Array<number> = [];

    constructor(nome: string) {
        this.nome = nome;
    }

    adicionarNota(nota: number) {
        this.notas.push(nota);
    }

    private calcularMedia(): number {
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
    public tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }
}

class BebidaAlcoolica extends Bebida {
    public teorAlcoolico: number;

    constructor(tipo:string, teor: number) {
        super(tipo);
        this.teorAlcoolico = teor;
    }
}

class Cerveja extends BebidaAlcoolica {
    public marca: string;

    constructor(tipo:string, teor: number, marca: string) {
        super(tipo, teor);
        this.marca = marca;
    }
}

const cerveja = new Cerveja('Fermentado', 5, 'Brahma');
const bebidaAlcoolica = new BebidaAlcoolica('Fermentado', 5);
const bebida = new Bebida('Fermentado');

// ============== // ================

interface ValoresAnimal {
    tamanho: number, 
    tipo: string
}

class Animal {
    public tamanho: number;
    public tipo: string;

    constructor(valores: ValoresAnimal) {
        this.tamanho = valores.tamanho;
        this.tipo = valores.tipo;
    }

    protected correr() {
        console.log('Correndo...');
    }

    cacar() {
        this.correr();
        console.log('Caçando...');
    }
}

class Cachorro extends Animal {
    constructor(valores: ValoresAnimal) {
        super(valores);
    }
}

class Gato extends Animal {
    constructor(valores: ValoresAnimal) {
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