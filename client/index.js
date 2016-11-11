import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
// import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createMemoryHistory, browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { todos } from '../imports/todos';
import { reducer as tasks, tasksReducer, requestStatus, tasksRequestData } from '../imports/tasks';
import routes from '../imports/routes';
import { promiseMiddleware, immutifyState } from 'lib';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { green100, green500, green700 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: green500,
		primary2Color: green700,
		primary3Color: green100,
	},
}, {
	avatar: { borderColor: null, },
	userAgent: 'all',
	// userAgent: req.headers['user-agent'],
});
// const initialState = immutifyState(window.__INITIAL_STATE__);
// browserHistory
const initialState = window.__INITIAL_STATE__;
console.log('\n ==========initialState==============\n', initialState);

const history = browserHistory;
const history2 = createBrowserHistory();
const reducer = combineReducers({
	todos,
	tasks,
	tasksReducer,
});
const store = applyMiddleware(promiseMiddleware, thunk)(createStore)(reducer,
	initialState);
render(
	<Provider store={store}>
    <Router children={routes} history={history}/>
  </Provider>,
	document.getElementById('react-view')
);