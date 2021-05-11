const lista = JSON.parse(localStorage.getItem('produtos'));
const ul = document.getElementsByTagName('ul')[0];

for (let item  of lista) {
   let li = document.createElement('li');
   li.innerText = `Nome: ${item.nome} - Preço: ${item.preco}`;
   ul.appendChild(li);
}