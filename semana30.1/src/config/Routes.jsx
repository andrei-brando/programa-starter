import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './../pages/Home';
import Character from '../pages/Character';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/character/:id" component={Character} />
      </Switch>
    </BrowserRouter>
  );
}
