import styled from 'styled-components';

export const CardsComponentStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ebf5fc;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  flex-wrap: wrap;
  padding: 40px 0;
}

.container .card {
  position: relative;
  min-width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.05),
              inset -5px 5px 5px rgba(255, 255, 255, 0.5),
              5px 5px 5px rgba(0, 0, 0, 0.05),
              -5px 5px 5px rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  margin: 30px;
}

.container .card .box {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background-color: #ebf5fc;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s;
}

.container .card:hover .box {
  transform: translateY(-50px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  background: linear-gradient(45deg, #AD4814,#DF8A35);
}

.container .card .box .content {
  padding: 20px;
  text-align: center;
}

.container .card .box .content h2 {
    position: absolute;
    top: -10px;
    right: 30px;
    font-size: 8em;
    color: rgba(0, 0, 0, 0.05);
    transition: .5s;
    pointer-events: none;
}

.container .card:hover .box .content h2 {
    color: rgba(0, 0, 0, 0.05);
}

.container .card .box .content h3 {
    font-size: 1.8em;
    color: #777;
    z-index: 1;
    transition: .5s;
}

.container .card .box .content p {
    font-size: 1em;
    font-weight: 300;
    color: #777;
    z-index: 1;
    transition: .5s;
}

.container .card:hover .box .content h3,
.container .card:hover .box .content p {
    color: #fff;
}

.container .card .box .content a {
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    background-color: #eb2f06;
    margin-top: 15px;
    border-radius: 20px;
    color: #fff;
    text-decoration: none;
    font-weight: 400;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.container .card:hover .box .content a {
    background-color: #000000;
    color:#eb2f06;
}
`;