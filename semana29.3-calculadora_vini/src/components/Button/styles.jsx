import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    button: {
        fontSize: '1.4em',
        backgroundColor: '#f0f0f0',
        border: 'none',
        borderRight: 'solid 1px #888',
        borderBottom: 'solid 1px #888',
        outline: 'none',
        '&:active': {
            backgroundColor: '#ccc'
        }
    },
    double: {
        gridColumn: 'span 2',
    },
    triple: {
        gridColumn: 'span 3'
    },
    operation: {
        backgroundColor: '#fa8231',
        color: '#FFF',
        '&:active': {
            backgroundColor: '#fa8231cc'
        }
    }
}));

export default useStyles;