import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import createLogger from 'redux-logger';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { todos } from '../imports/todos';
import { reducer as tasks, tasksReducer,
  requestStatus, tasksRequestData }from '../imports/tasks';
import routes from '../imports/routes';
import { promiseMiddleware } from 'lib';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
const initialState = window.__INITIAL_STATE__;

const history = browserHistory;
const reducer = combineReducers({ todos,
    tasks,
    tasksReducer, form, });
const logger = createLogger({ collapsed: (getState, action) => action.type });

const store = applyMiddleware(promiseMiddleware, thunk, logger)(createStore)(reducer, initialState);
render(
  <Provider store={store} >
    <Router children={routes} history={history}/>
  </Provider>,
	document.getElementById('react-view')
);
