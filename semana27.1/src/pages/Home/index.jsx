import React from 'react';

// export default function Home(props) {
export default function Home({ name, idade }) {
  const paragrafo = <p>Sed porttitor lectus nibh.</p>
  const frutas = ['Laranja', 'Uva', 'Melão', 'Abacaxi'];
  const lista = [];

  for (let fruta of frutas) {
    lista.push(<li>{fruta}</li>)
  }

  return (
    <React.Fragment >
      <h1>
        Olá, {name} - {idade}
      </h1>

      {paragrafo}

      <ul>
        {lista}
      </ul>

      {
        idade >= 18 ? <h2>Maior de idade</h2> : <h2>Menor de idade</h2>
      }
    </React.Fragment>
  );
}