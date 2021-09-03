import React from 'react';
import { Box, Button } from '@material-ui/core';
import useStyles from './styles';
import Display from '../Display';

export default function Base() {
  const styles = useStyles();

  return (
    <React.Fragment>
      <Box className={styles.base}>
        <Display></Display>
        <Button style={{ backgroundColor: 'red' }}>1</Button>
      </Box>
    </React.Fragment>
  );
}
