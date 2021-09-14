import React from 'react';
import Filho1 from '../Filho1';
import Filho2 from '../Filho2';

export default function Pai() {
  return (
    <>
      <h1>Componente Pai</h1>
      <hr />
      <Filho1 />
      <hr />
      <Filho2 />
    </>
  );
}
