import styled from 'styled-components';

export const AppFeaturesComponentStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap');

:root{
    --purple:#814096;
    --pink:#F83292;
    --gradient:linear-gradient(90deg, var(--purple), var(--pink));
}

*{
    font-family: 'Poppins', sans-serif;
    margin:0; padding:0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none; border:none;
    text-transform: capitalize;
}

*::selection{
    background:var(--pink);
    color:#fff;
}

section{
    min-height: 100vh;
    padding:0 9%;
    padding-top: 7.5rem;
    padding-bottom: 2rem;
}

.btn{
    display: inline-block;
    margin-top: 1rem;
    padding:.8rem 3rem;
    border-radius: 5rem;
    background:var(--gradient);
    font-size: 1.7rem;
    color:#fff;
    cursor: pointer;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    transition: all .3s linear;
}

.btn:hover{
    transform: scale(1.1);
}

.heading{
    text-align: center;
    background:var(--gradient);
    color:transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 3.5rem;
    text-transform: uppercase;
    padding:1rem;
}

.features .box-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.features .box-container .box{
    flex:1 1 30rem;
    background:#fff;
    border-radius: .5rem;
    border:.1rem solid rgba(0,0,0,.2);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    margin:1.5rem;
    padding:3rem 2rem;
    border-radius: .5rem;
    text-align: center;
    transition: .2s linear;
}

.features .box-container .box img{
    height: 15rem;
}

.features .box-container .box h3{
    font-size: 2rem;
    color:#333;
    padding-top: 1rem;
}

.features .box-container .box p{
    font-size: 1.3rem;
    color:#666;
    padding: 1rem 0;
}


`;