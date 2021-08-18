import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  document.title = 'About';

  return (
    <React.Fragment>
      <h1>Sobre</h1>

      <Link to='/'>Home</Link>
    </React.Fragment>
  );
}