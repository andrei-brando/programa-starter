import React from 'react';
import useStyles from './styles';

export default function Button({operation, double, triple, click, label}) {
    const classes = useStyles();
    return(
        <button type="button" 
                onClick={() => click && click(label)} 
                className={`${classes.button} 
                            ${operation ? classes.operation : ''} 
                            ${double ? classes.double : ''} 
                            ${triple ? classes.triple : ''}`}>
            {label}
        </button>
    )
} 