import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import createLogger from 'redux-logger';
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
import { reducer as form } from 'redux-form';

const initialState = window.__INITIAL_STATE__;

const history = browserHistory;
const reducer = combineReducers({ todos,
    tasks,
    tasksReducer, form, });
const logger = createLogger({ collapsed: (getState, action) => action.type });

const store = applyMiddleware(promiseMiddleware, thunk, logger)
	(createStore)(reducer, initialState);
render(
	<Provider store={store} >
    <Router children={routes} history={history}/>
  </Provider>,
	document.getElementById('react-view')
);
