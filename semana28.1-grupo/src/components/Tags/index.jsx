import React from 'react';
import { FaDesktop, FaCheckCircle } from 'react-icons/fa';
import { TagsStyle } from './style';


export default function Tags() {
    return (
        <React.Fragment>
            <TagsStyle>
                <div className="container">
                    <div className="icon-cards">
                        <h2><FaDesktop /></h2>
                        <h2>Somente para desktop</h2>
                        <h4>Vamos aprender como utilizar um framework</h4>
                    </div>
                    <div className="icon-cards">
                        <h2><FaCheckCircle /></h2>
                        <h2>Somente para desktop</h2>
                        <h4>Vamos aprender como utilizar um framework</h4>
                    </div>
                    <div className="icon-cards">
                        <h2><FaDesktop /></h2>
                        <h2>Somente para desktop</h2>
                        <h4>Vamos aprender como utilizar um framework</h4>
                    </div>
                </div>
            </TagsStyle>
        </React.Fragment>
    );
}