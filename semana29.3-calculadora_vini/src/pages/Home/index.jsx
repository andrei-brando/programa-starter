import Calculadora from '../../components/Calculadora';
import useStyles from './styles';

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Calculadora/>
        </div>
    );
}