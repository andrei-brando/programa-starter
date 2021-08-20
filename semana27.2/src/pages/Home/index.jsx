import React, { useState } from "react";
import Card from "../../components/Card";

import users from '../../data/user';

export default function Home() {
  const cards = [];
  let [numero, setNumero] = useState(0);
  let [nome, setNome] = useState('Andrei');

  for (const user of users) {
    cards.push(<Card key={user.name} user={user} />);
  }

  function onClick(event) {
    event.preventDefault();
    setNumero(++numero);
  }

  function onChange(event) {
    setNome(event.target.value)
  }

  return (
    <React.Fragment>
      <div>
        <h1>Meu título</h1>
        {cards}
        <p>{numero}</p>
        <button onClick={onClick}>+1</button>
        <h1>{nome}</h1>
        <input type="text" value={nome} onChange={onChange} />
        <hr />
      </div>
    </React.Fragment>
  );
}