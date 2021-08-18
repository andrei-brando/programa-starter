import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';

export default function Home() {
  document.title = 'Home';
  return (
    <React.Fragment >
      <Card name='Andrei' idade={23}>
        <Link to='/about'>Sobre</Link>
        <p>paragrado de teste</p>
        <strong>strong de teste</strong>
      </Card>
    </React.Fragment>
  );
}