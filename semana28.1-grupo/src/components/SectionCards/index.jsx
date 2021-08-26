import React from 'react';
import { CardsComponentStyle } from './style';

export default function Cards() {
    return (
        <CardsComponentStyle>
            <section>
                <div className="container">
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h2>01</h2>
                                <h3>Card One</h3>
                                <p>
                                    Pellentesque in ipsum id orci porta dapibus.
                                    Curabitur aliquet quam id dui posuere blandit. Cras
                                    ultricies ligula sed magna dictum porta.
                                </p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h2>02</h2>
                                <h3>Card Two</h3>
                                <p>
                                    Pellentesque in ipsum id orci porta dapibus.
                                    Curabitur aliquet quam id dui posuere blandit. Cras
                                    ultricies ligula sed magna dictum porta.
                                </p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h2>03</h2>
                                <h3>Card Three</h3>
                                <p>
                                    Pellentesque in ipsum id orci porta dapibus.
                                    Curabitur aliquet quam id dui posuere blandit. Cras
                                    ultricies ligula sed magna dictum porta.
                                </p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </CardsComponentStyle>
    );
}
