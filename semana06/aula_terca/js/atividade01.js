const t = document.getElementsByTagName('h1')[0];

function adicionar() {
   // const valorAtual = t.innerHTML;
   // let numero = parseInt(valorAtual);
   // numero++;

   // t.innerHTML = numero;
   t.innerText = parseInt(t.innerText) + 1;
}

function diminuir() {
   t.innerText = parseInt(t.innerText) - 1;
}