/**
 * criar uma classe Filmes, que vai ter:
 * titulo
 * ano
 * duracao (120min)
 */

class Filmes {
   
   titulo: string;
   ano: number;
   duracao: number;

   constructor(titulo: string, ano: number, duracao: number){
      this.titulo = titulo;
      this.ano = ano;
      this.duracao = duracao;
   }

   exibirDuracaoEmHoras(): void {
      console.log(`O filme ${this.titulo}, foi lançado em ${this.ano} e tem duração de ${this.duracao / 60} horas`);
   }
}

const filme = new Filmes('Spider-Man: Home-coming', 2020, 180);
filme.exibirDuracaoEmHoras();