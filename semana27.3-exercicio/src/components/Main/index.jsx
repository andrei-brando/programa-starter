import React from 'react';
import { MainStyle } from './styles';
import IconCard from '../IconCard';

export default function Main() {
  return (
    <React.Fragment>
      <MainStyle>
        <div className="teste">
          <IconCard
            text="Somente para Desktop"
            subText="Vamos aprender como utilizar um framework"
          />
          <IconCard
            text="Somente para Desktop"
            subText="Vamos aprender como utilizar um framework"
          />
          <IconCard
            text="Somente para Desktop"
            subText="Vamos aprender como utilizar um framework"
          />
        </div>
      </MainStyle>
    </React.Fragment>
  );
}
