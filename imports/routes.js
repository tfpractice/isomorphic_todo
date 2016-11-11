import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Main as App, Home } from './components';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

console.log('\n ==========MAIN==============\n', App);
const Root = (
	<Route name="app" component={App} path="/">
      <IndexRoute component={Home}/>
    </Route>
);
console.log('\n ==========ROOT==============\n', Root);

export default Root;