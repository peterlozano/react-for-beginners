import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/list" component={App} />
      <Route exact path="/list/:listId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

Router.propTypes = {}

export default Router