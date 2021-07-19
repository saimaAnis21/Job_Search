import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Job from './containers/Job';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Job" component={Job} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
