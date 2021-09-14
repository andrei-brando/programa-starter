import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    display: {
        gridColumn: 'span 4',
        backgroundColor: '#0004',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '20px',
        fontSize: '2.1em',
        overflow: 'hidden'
    }
}));

export default useStyles;
