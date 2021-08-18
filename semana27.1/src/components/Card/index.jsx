import React from "react";
import './index.css';

export default function Card({ name, idade, children }) {
  const paragrafo = <p>Sed porttitor lectus nibh.</p>
  const frutas = ['Laranja', 'Uva', 'Melão', 'Abacaxi'];
  const lista = [];

  for (let fruta of frutas) {
    lista.push(<li>{fruta}</li>)
  }

  return (
    <React.Fragment >
      <h1 className='bg-black'>
        Olá, {name} - {idade}
      </h1>

      {paragrafo}

      <ul>
        {lista}
      </ul>

      {
        idade >= 18 ? <h2>Maior de idade</h2> : <h2>Menor de idade</h2>
      }

      {children}
    </React.Fragment>
  );
}