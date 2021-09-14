import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './config/Routes';
import Footer from './components/Footer';
import Header from './components/Header';
import theme from './config/Theme';
import { store, persistor } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline />
            <Header />
            <Routes />
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
