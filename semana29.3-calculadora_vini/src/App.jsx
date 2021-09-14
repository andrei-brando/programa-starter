import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from './config/Routes';

export default function App() {
  return (
    <BrowserRouter>
        <CssBaseline/>
        <Routes />
      </BrowserRouter>
  );
}