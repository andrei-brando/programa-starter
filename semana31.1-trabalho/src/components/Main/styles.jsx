import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  main: {
    background: '#bacde0',
    height: '60vh',
  },
  section1: {
    height: '30vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  section2: {
    height: '30vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
}));

export default useStyles;
