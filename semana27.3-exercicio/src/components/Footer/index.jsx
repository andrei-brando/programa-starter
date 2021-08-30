import React from 'react';
import { FooterStyle } from './styles';
import { SiFacebook } from 'react-icons/si';
import { AiOutlineInstagram, AiFillTwitterSquare } from 'react-icons/ai';

export default function Footer() {
  return (
    <React.Fragment>
      <FooterStyle>
        <section className="infos">
          <div className="links">
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>Terms of Use</h3>
            <h3>Privacy Policy</h3>
          </div>
          <p>© Your website 2021. All Rights Reserved.</p>
        </section>
        <section className="social-icons">
          <SiFacebook className="icons" />
          <AiFillTwitterSquare className="icons" />
          <AiOutlineInstagram className="icons" />
        </section>
      </FooterStyle>
    </React.Fragment>
  );
}
