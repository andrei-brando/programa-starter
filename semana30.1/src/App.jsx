import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from './config/Routes';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline>
        <Routes />
      </CssBaseline>
    </React.Fragment>
  );
}
