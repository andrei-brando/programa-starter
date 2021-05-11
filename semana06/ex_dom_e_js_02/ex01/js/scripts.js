const inputText = document.getElementById('texto');
const inputNumber = document.getElementById('num');

function handleMenu(event) {
   event.preventDefault();
   if (inputText.value === '') {
      alert('Digite seu nome!');
   }

   switch (inputNumber.value) {
      case 1:
         alert(`Olá, ${inputText.value}`);
         break;
      case 2:
         alert(`${inputText.value}, entrando no sistema!`);
         break;
      case 1:
         alert(`Tchau, ${inputText.value}!`);
         break;
      default:
         alert('Escolha uma opção válida (1, 2 ou 3)');
         break;
   }
}