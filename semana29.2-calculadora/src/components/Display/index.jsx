import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles';

export default function Display() {
  const styles = useStyles();

  return (
    <React.Fragment>
      <Box className={styles.blue}></Box>
    </React.Fragment>
  );
}
