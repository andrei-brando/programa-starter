import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './../pages/Home';
import Soccer from './../pages/Soccer';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/soccer" exact component={Soccer} />
      </Switch>
    </BrowserRouter>
  );
}
