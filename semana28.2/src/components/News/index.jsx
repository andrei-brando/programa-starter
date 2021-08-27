import React from 'react';
import Card from '../Card';

export default function News() {
  return (
    <React.Fragment>
      <h2>Noticias</h2>
      <Card title='Item 1' />
      <Card title='Item 2' />
      <Card title='Item 3' />
    </React.Fragment>
  );
}