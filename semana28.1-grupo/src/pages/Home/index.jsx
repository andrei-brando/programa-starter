import React from "react";
import Main from "../../components/Main";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import Cards from "../../components/SectionCards";
import Contact from "../../components/Contact";
import AppFeatures from "../../components/SectionAppFeatures";
import Tags from "../../components/Tags";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Tags />
      <Main />
      <Main inverted={true} />
      <Main />
      <Contact />
      <Cards />
      <AppFeatures />
      <Footer />
    </React.Fragment>
  );
}