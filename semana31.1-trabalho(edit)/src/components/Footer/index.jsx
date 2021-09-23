import React from 'react';
import useStyles, { FooterStyle } from './styles';
import { Instagram } from '@material-ui/icons';
import { Email } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';

export default function Footer() {
  const style = useStyles();
  return (
    <React.Fragment>
      <FooterStyle>
        <ul>
          <li>
            <a
              rel="noreferrer"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <Instagram />
            </a>
          </li>
          <li>
            <a rel="noreferrer" href="https://mail.google.com/" target="_blank">
              <Email />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </li>
        </ul>
        <h2>© 2021</h2>
      </FooterStyle>
    </React.Fragment>
  );
}
