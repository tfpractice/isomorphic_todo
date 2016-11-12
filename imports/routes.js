import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Main as App, Home } from './components';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { green100, green500, green700 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Root = (
    <Route name="app" component={App} path="/">
      <IndexRoute component={Home}/>
    </Route>

);

export default Root;