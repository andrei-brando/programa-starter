import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    background: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', 
        color: '#fff',
        background: 'linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73))'
    }
}));

export default useStyles;
