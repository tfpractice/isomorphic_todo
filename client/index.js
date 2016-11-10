import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { todos } from '../imports/todos';
import { reducer as tasks, tasksReducer } from '../imports/tasks';
import routes from '../imports/routes';
import { promiseMiddleware, immutifyState } from 'lib';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const initialState = immutifyState(window.__INITIAL_STATE__);
const history = createBrowserHistory();
const reducer = combineReducers({ todos, tasks, tasksReducer });
const store = applyMiddleware(promiseMiddleware, thunk)(createStore)(reducer,
    initialState);

render(
    <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
    document.getElementById('react-view')
);
