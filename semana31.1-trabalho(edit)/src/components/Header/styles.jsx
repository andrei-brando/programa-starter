import { makeStyles } from '@material-ui/core';
import backgroud from './../../assets/img/header.jpeg';

const useStyles = makeStyles((theme) => ({
  header: {
    background: '#0066cc',
    height: '20vh',
  },
  imgHeader: {
    backgroundImage: `url(${backgroud})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
  },
}));

export default useStyles;
