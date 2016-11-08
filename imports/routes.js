import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Main as App, Home } from './components';
const Root = (
	<Route name="app" component={App} path="/">
      <IndexRoute component={Home}/>
  </Route>
);

export default Root;