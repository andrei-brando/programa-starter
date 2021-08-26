import React from 'react';
import { MainComponentStyle } from './style';
import Square from '../Square';

export default function Main(props) {
    const url = 'https://www.hypeness.com.br/1/2018/12/imagens-surreais.jpg';

    return (
        <React.Fragment>
            <MainComponentStyle>
                <div className="container">
                    <Square urlImage={props.inverted ? url : null} />
                    <Square urlImage={props.inverted ? null : url} />
                </div>
            </MainComponentStyle>
        </React.Fragment>
    );
}