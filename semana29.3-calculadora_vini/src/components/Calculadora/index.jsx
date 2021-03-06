import React from 'react';
import useStyles from './styles';

import Button from '../Button';
import Display from '../Display';

export default function Calculadora() {
    const classes = useStyles();
    return (
        <div className={classes.calculator}>
            <Display value="0" />
            <Button label="AC" triple />
            <Button label="/" operation />
            <Button label="7" />
            <Button label="8" />
            <Button label="9" />
            <Button label="*" operation />
            <Button label="4" />
            <Button label="5" />
            <Button label="6" />
            <Button label="-" operation />
            <Button label="1" />
            <Button label="2" />
            <Button label="3" />
            <Button label="+" operation />
            <Button label="0" double />
            <Button label="." />
            <Button label="=" soperation />    
        </div>
    );
}