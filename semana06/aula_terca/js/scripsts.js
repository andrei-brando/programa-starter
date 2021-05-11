const pessoa = {
   nome: 'Andrei',
   sobrenome: 'Brando',
   idade: 23,
   nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
   }
}

for (index in pessoa) {
   // console.log(pessoa[index]);
}

function exibirRetornoRequisicao() {
   // codigo aqui
   return {
      data: data,
      message: 'Retornado com sucesso',
   }
};

const carnes = [
   {
      nome: 'Picanha',
      valor: 10
   },
   {
      nome: 'Vazio',
      valor: 8
   },
   {
      nome: 'Moída',
      valor: 3
   },
];

for (carne of carnes) {
   // console.log(`${carne.nome} é de ${carne.valor > 5 ? 'primeira' : 'segunda'}`);
}

const titulo = document.getElementById('titulo');
// console.log(titulo);

titulo.innerHTML = '<p>Andrei</p>';
titulo.classList.add('titulo');
titulo.classList.remove('bg-black');

const titulo2 = document.getElementsByTagName('h1');

for (let titulo of titulo2) {
   // console.log(titulo);
}

const titulo3 = document.getElementsByClassName('paragrafo');
// console.log(titulo3);

const titulo4 = document.querySelector('.paragrafo');
// console.log(titulo4);

const titulo5 = document.querySelectorAll('.paragrafo');
// console.log(titulo5);


// NOVO PARAGRAFO DINAMICO
const conteudo = document.getElementById('conteudo');
const paragrafo = document.createElement('p');
paragrafo.innerHTML = 'Paragrafo dinâmico';
paragrafo.classList.add('titulo');

conteudo.appendChild(paragrafo);