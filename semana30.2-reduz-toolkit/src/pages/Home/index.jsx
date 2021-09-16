import React from 'react';
import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { decrease, increase } from './../../store/modules/counter/actions';

export default function Home() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function onIncrease() {
    dispatch(increase(1));
  }

  function onDecrease() {
    dispatch(decrease(1));
  }

  return (
    <React.Fragment>
      <Typography variant="h1">Olá, Turma</Typography>
      <Typography variant="h2">{counter}</Typography>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </React.Fragment>
  );
}
