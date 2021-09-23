import {
  FormControl,
  Grid,
  TextField,
  Select,
  Button,
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

  useEffect(() => {
    const http = new FixerHelper();

    http.getRates().then((response) => {
      const { rates } = response;
      console.log(response.rates);
      setCurrency(rates);
      setCurrency2(rates);
    });
  }, []);

  function convert(e) {
    e.preventDefault();
    let num = (value2 / value1) * text1;
    setText2(num);
  }

  return (
    <React.Fragment>
      <Grid container className={style.main}>
        <div className={style.section1}>
          <form>
            <FormControl className="dropdown" variant="outlined">
              <Select label="De" onChange={(e) => setValue1(e.target.value)}>
                {Object.keys(currency).map((value, index) => (
                  <option key={index} value={currency[value]}>
                    {value}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl className="dropdown" variant="outlined">
              <Select label="Para" onChange={(e) => setValue2(e.target.value)}>
                {Object.keys(currency2).map((value, index) => (
                  <option key={index} value={currency2[value]}>
                    {value}
                  </option>
                ))}
              </Select>
              <Button onClick={convert}>CLICAR</Button>
            </FormControl>
          </form>
        </div>
        <div className={style.section2}>
          <TextField
            variant="outlined"
            value={text1 || ''}
            onChange={(e) => setText1(e.target.value)}
            autoComplete="off"
          ></TextField>
          <TextField variant="outlined" value={text2 || ''}></TextField>
        </div>
      </Grid>
    </React.Fragment>
  );
}
