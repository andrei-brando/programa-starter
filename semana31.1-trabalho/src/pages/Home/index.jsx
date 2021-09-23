import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
// import { useSelector, useDispatch } from 'react-redux';

// import { decrease, increase } from '../../store/modules/counter';
// import { saveCard, selectAll, selectIds } from '../../store/modules/cards';

export default function Home() {
  // const counter = useSelector((state) => state.counter);
  // const cards = useSelector(selectIds);
  // const dispatch = useDispatch();
  // const [value, setValue] = useState(1);

  // console.log(cards);

  // useEffect(() => {
  //   const card = {
  //     id: 1,
  //     title: 'card do daniel',
  //     description: 'comentador de youtube',
  //   };

  //   dispatch(saveCard(card));
  // }, []);

  // function onIncrease() {
  //   dispatch(increase(value));
  // }

  // function onDecrease() {
  //   dispatch(decrease(value));
  // }

  return (
    <React.Fragment>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </React.Fragment>
  );
}
