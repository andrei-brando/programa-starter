import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Api from '../../services/Api';

export default function Character() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  // const [name, setName] = useState(null);
  // const [description, setDescription] = useState(null);

  useEffect(() => {
    Api.getCharactersById(id)
      .then((response) => {
        setCharacter(response.data.results[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      <h1>Página de detalhe - {id}</h1>
      {character?.name}
      <br />
      {character?.description}
      <br />
      <img
        src={
          character
            ? `${character.thumbnail.path}.${character.thumbnail.extension}`
            : ''
        }
        alt=""
      />
      <br />
      <Link to="/">Voltar</Link>
    </React.Fragment>
  );
}
