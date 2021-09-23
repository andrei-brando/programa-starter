import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: '#0066cc',
    height: '25vh',
  },
}));

const FooterStyle = styled.div`
  background: #0066cc;
  height: 25vh;
  ul {
    display: flex;
  }

  li {
    list-style: none;
    margin-left: 20px;
  }
  a {
    text-decoration: none;
    display: flex;
  }

  h2 {
    font-size: 15px;
    text-align: left;
  }
`;

export { FooterStyle };

export default useStyles;
