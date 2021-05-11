let produtos = [];

function adicionar() {
   const nome = document.getElementsByTagName('input')[0];
   const preco = document.getElementsByTagName('input')[1];
   const label = document.getElementsByTagName('p')[0];

   const produto = {
      nome: nome.value,
      preco: preco.value,
   }

   if (nome.value !== '' && preco.value !== '') {
      produtos.push(produto);
      nome.value = null;
      preco.value = null;
      localStorage.setItem('produtos', JSON.stringify(produtos));
      label.innerHTML = `Total de Produtos: ${produtos.length}`;
   }
}

// localStorage.clear();