import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './config/Routes';
import { store, persistor } from './store';

export default function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <CssBaseline>
            <Routes />
          </CssBaseline>
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}
