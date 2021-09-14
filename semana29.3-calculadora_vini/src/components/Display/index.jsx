import React from 'react';
import useStyles from './styles';

export default function Display({value}) {
    const classes = useStyles();
    return (
        <div className={classes.display}>{value}</div>
    );
}