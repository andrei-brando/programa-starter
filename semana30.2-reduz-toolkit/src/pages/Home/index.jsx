import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { decrease, increase } from '../../store/modules/counter';

export default function Home() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  function onIncrease() {
    dispatch(increase(value));
  }

  function onDecrease() {
    dispatch(decrease(value));
  }

  return (
    <React.Fragment>
      <Typography variant="h1">Olá, Turma</Typography>
      <Typography variant="h2">{counter}</Typography>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </React.Fragment>
  );
}
