import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

export default function Header() {
  const style = useStyles();

  return (
    <React.Fragment>
      <Grid container className={style.header}>
        <Grid item xs={6} className={style.imgHeader}></Grid>
      </Grid>
    </React.Fragment>
  );
}
