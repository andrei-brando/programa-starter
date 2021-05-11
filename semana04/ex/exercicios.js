const nome = 'João';
const peso = 91;
const altura = 1.70;
const imc = peso / (altura * altura);

if (imc >= 30) {
   console.log('João, você está acima do peso');
} else {
   console.log('João, você não está acima do peso');
}

function calcularMedia(nome, n1, n2, n3) {
   const mediaEx = (n1 + n2 + n3) / 3;
   let mediaAritimetica = (n1, n2 * 2, n3 * 3 + mediaEx) / 7;
   let conceito = '';
   let resultado = '';

   switch (true) {
      case mediaAritimetica < 4:
         conceito = 'E';
         break;
      case mediaAritimetica >= 4.0 && mediaAritimetica < 6.0:
         conceito = 'D';
         break;
      case mediaAritimetica >= 6.0 && mediaAritimetica < 7.5:
         conceito = 'C';
         break;
      case mediaAritimetica >= 7.5 && mediaAritimetica < 9.0:
         conceito = 'A';
         break;
      case mediaAritimetica >= 7.5 && mediaAritimetica < 9.0:
         conceito = 'A';
         break;
   }
   
   if (conceito == 'A' || conceito == 'B' || conceito == 'C') {
      resultado = 'APROVADO';
   } else {
      resultado = 'REPROVADO';
   }

   console.log(`${nome}, sua média é ${mediaAritimetica}, seu conceito é: ${conceito} e você está: ${resultado}`);
}

calcularMedia('João', 10, 7, 3);