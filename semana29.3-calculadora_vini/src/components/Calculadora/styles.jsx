import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    calculator: {
        height: '320px',
        width: '235px',
        borderRadius: '5px',
        overflow: 'hidden', 
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 25%)',
        gridTemplateRows: '1fr 48px 48px 48px 48px 48px'
    }
}));

export default useStyles;
