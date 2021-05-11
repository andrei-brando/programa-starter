"use strict";
/**
 * criar uma classe Filmes, que vai ter:
 * titulo
 * ano
 * duracao (120min)
 */
class Filmes {
    constructor(titulo, ano, duracao) {
        this.titulo = titulo;
        this.ano = ano;
        this.duracao = duracao;
    }
    exibirDuracaoEmHoras() {
        console.log(`O filme ${this.titulo}, foi lançado em ${this.ano} e tem duração de ${this.duracao / 60} horas`);
    }
}
const filme = new Filmes('Spider-Man: Home-coming', 2020, 180);
filme.exibirDuracaoEmHoras();
