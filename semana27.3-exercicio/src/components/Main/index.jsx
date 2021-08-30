import React from 'react';
import { MainStyle } from './styles';
import IconCard from '../IconCard';
import ExtendedComponent from '../ExtendComponent';

export default function Main() {
  return (
    <React.Fragment>
      <MainStyle>
        <div className="section1">
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
        <ExtendedComponent />
        <ExtendedComponent inverted={true} />
        <ExtendedComponent />
      </MainStyle>
    </React.Fragment>
  );
}
