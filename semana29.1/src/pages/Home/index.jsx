/* eslint-disable react/button-has-type */
import React, { useRef } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import News from '../../components/News';
import useStyles from './styles';

export default function Home() {
  const classes = useStyles();

  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` aponta para o evento de `focus` gerado pelo campo de texto
    inputEl.current.focus();
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3">Home Page</Typography>
        <p>
          Cras ultricies ligula sed magna dictum porta. Vivamus magna justo,
          lacinia eget consectetur sed, convallis at tellus. Mauris blandit
          aliquet elit, eget tincidunt nibh pulvinar a.
        </p>
        <Box>
          <h2>Titulo Secundário</h2>
          <h2>kkkkk</h2>
        </Box>
      </Grid>
      <Grid item xs={6} className={classes.red}>
        <p>
          Cras ultricies ligula sed magna dictum porta. Vivamus magna justo,
          lacinia eget consectetur sed, convallis at tellus. Mauris blandit
          aliquet elit, eget tincidunt nibh pulvinar a.
        </p>
      </Grid>
      <Grid item xs={6} className={classes.blue}>
        <p>
          Cras ultricies ligula sed magna dictum porta. Vivamus magna justo,
          lacinia eget consectetur sed, convallis at tellus. Mauris blandit
          aliquet elit, eget tincidunt nibh pulvinar a.
        </p>
      </Grid>
      <Grid item xs={12}>
        <News />
      </Grid>
      <Grid item xs={12}>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus no input</button>
      </Grid>
    </Grid>
  );
}
