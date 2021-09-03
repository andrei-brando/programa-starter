import { createTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

import 'typeface-montserrat';

export default createTheme(
  {
    palette: {
      primary: {
        main: '#120A8F',
        light: '#517adb',
      },
      secondary: {
        main: '#191919',
        ligth: '#707070',
      },
      background: {
        paper: '#fff',
        login: 'linear-gradient(45deg, #120A8F 40%, #517adb 100%)',
      },
    },
    typography: {
      fontFamily: 'Montserrat',
      fontSize: 12,
    },
  },
  ptBR
);
