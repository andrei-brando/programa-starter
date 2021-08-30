import styled from 'styled-components';

export const FooterStyle = styled.div`
  height: 200px;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;

  section {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #1773ea;
  }

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .links {
    display: flex;
    flex-direction: row;
  }

  h3 {
    margin-left: 10px;
    margin-right: 10px;
  }

  p {
    color: #686666;
  }

  .social-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .icons {
    width: 40px;
    height: 40px;
    margin: 5px;
  }
`;
