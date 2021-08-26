import React from 'react';
import { AppFeaturesComponentStyle } from './style';
import 'images'

export default function AppFeatures() {
    return (
        <AppFeaturesComponentStyle>
            <section class="features" id="features">
                <h1 class="heading"> app features </h1>
                <div class="box-container">
                    <div class="box">
                        <img className="image-1" />
                        <h3>amazing UI design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus recusandae autem, repellendus fugit quaerat provident voluptatum non officiis ratione.</p>
                        <a href="#" class="btn">read more</a>
                    </div>
                    <div class="box">
                        <img src="images/f-icon2.png" alt="" />
                        <h3>soft and smooth animations</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus recusandae autem, repellendus fugit quaerat provident voluptatum non officiis ratione.</p>
                        <a href="#" class="btn">read more</a>
                    </div>
                    <div class="box">
                        <img src="images/f-icon3.png" alt="" />
                        <h3>freindly interactions</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus recusandae autem, repellendus fugit quaerat provident voluptatum non officiis ratione.</p>
                        <a href="#" class="btn">read more</a>
                    </div>
                </div>
            </section>
        </AppFeaturesComponentStyle>
    );
}
