import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../services/Api';

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Api.getCharacters()
      .then((response) => {
        response.data.results.forEach((item) => {
          setCharacters((oldValue) => [
            ...oldValue,
            <li>
              <Link to={`/character/${item.id}`}>{item.name}</Link>
            </li>,
          ]);
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      <h1>Olá, Turma</h1>
      <ul>{characters}</ul>

      <Link to={`/character/1011121`}>Teste</Link>
    </React.Fragment>
  );
}
