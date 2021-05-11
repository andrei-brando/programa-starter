// #1
function acessoAoSite(): void {
   console.log('Bem-vindo ao site');
}
acessoAoSite();

// #2
function mostrarMensagem(): void {
   const nomeAplicacao: string = 'GrowApp';

   console.log(`Acesso à aplicação ${nomeAplicacao}`);
   console.log(`Bem-vindo à aplicação ${nomeAplicacao}`);
}
mostrarMensagem();

// #3
function mostrarDobro(n: number): void {
   console.log(`O dobro do número ${n} é ${n * 2}`);
}
mostrarDobro(5);

// #4
function boasVindas(nome: string): void {
   console.log(`Seja bem-vindo, ${nome}`);
}
boasVindas('Pedro');

// #5
function calcularMedia(nota1: number, nota2: number, nota3: number, nome: string):void {
   const media:number = (nota1 + nota2 + nota3) / 3;

   console.log(`${nome}, sua média é ${media}`);
   console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}`);
}
calcularMedia(60, 70, 80, 'Pedro');