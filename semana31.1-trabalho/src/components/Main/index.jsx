import {
  FormControl,
  Grid,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { FixerHelper } from '../../services/FixerHelper';
import useStyles from './styles';

export default function Main() {
  const style = useStyles();
  const [text1, setText1] = useState(1);
  const [text2, setText2] = useState(1);
  const [currency, setCurrency] = useState([]);
  const [currency2, setCurrency2] = useState([]);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);

  const teste = [];

  useEffect(() => {
    const http = new FixerHelper();

    http
      .getRates()
      .then((response) => {
        const { rates } = response;
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <Grid container className={style.main}>
        <form onSubmit={convert}>
          <div className={style.section1}>
            <TextField variant="outlined" value={text1 || ''}></TextField>

            <FormControl
              className="dropdown"
              variant="outline"
              onChange={(e) => setValue1(e.target.value)}
            >
              <Select label="De">
                {Object.keys(currency).map((value, index) => (
                  <option key={index} value={currency[value]}>
                    {value}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>
        </form>
        <div className={style.section2}>
          <h1>Section2</h1>
        </div>
      </Grid>
    </React.Fragment>
  );
}
