import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
