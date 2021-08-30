import React from 'react';
import { DividedContentStyle } from './styles';

export default function DividedContent(props) {
  return (
    <React.Fragment>
      <DividedContentStyle>
        {props.text ? (
          <p>
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
            sem. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit
            aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus
            nibh. Vivamus suscipit tortor eget felis porttitor volutpat.
          </p>
        ) : (
          <img
            src="https://dicasboaspracachorro.com.br/wp-content/uploads/2020/11/Dachshund1.jpg"
            alt="Imagem"
          />
        )}
      </DividedContentStyle>
    </React.Fragment>
  );
}
