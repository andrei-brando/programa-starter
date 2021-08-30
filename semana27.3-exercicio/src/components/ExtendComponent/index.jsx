import React from 'react';
import { ExtendedComponentStyle } from './style';
import DividedContent from '../DividedContent';

export default function ExtendedComponent(props) {
  const t1 = (
    <React.Fragment>
      <DividedContent />
      <DividedContent text={true} />
    </React.Fragment>
  );

  const t2 = (
    <React.Fragment>
      <DividedContent text={true} />
      <DividedContent />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ExtendedComponentStyle>
        {props.inverted ? t2 : t1}
      </ExtendedComponentStyle>
    </React.Fragment>
  );
}
