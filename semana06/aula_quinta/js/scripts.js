function exibirValor(event) {
   // console.log(event.target.innerHTML);
   event.preventDefault();
   const valueInput = document.getElementById('valor').value;
   const paragrafo = document.getElementsByClassName('exibir')[0];

   paragrafo.innerHTML = valueInput;
}