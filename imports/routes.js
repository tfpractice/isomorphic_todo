import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Main as App, Home } from './components';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { green100, green500, green700 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const muiTheme = getMuiTheme({
	palette: {
		primary1Color: green500,
		primary2Color: green700,
		primary3Color: green100,
	},
}, {
	avatar: { borderColor: null, },
	// userAgent: global.navigator.userAgent,
	userAgent: 'all',
	// userAgent: req.headers['user-agent'],
});

console.log('\n ==========MAIN==============\n', App);
const Root = (
	<MuiThemeProvider muiTheme={muiTheme}>

	<Route name="app" component={App} path="/">
      <IndexRoute component={Home}/>
    </Route>
    	</MuiThemeProvider>

);
console.log('\n ==========ROOT==============\n', Root);
export default Root;