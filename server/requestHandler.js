// import express from 'express';
import React from 'react';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import routes from '../imports/routes';
import { Provider } from 'react-redux';
import { todos } from '../imports/todos';
import { reducer as tasks, tasksReducer, requestStatus, tasksRequestData } from '../imports/tasks';
import promiseMiddleware from '../imports/lib/promiseMiddleware';
import fetchComponentData from '../imports/lib/fetchComponentData';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';

export const handleRequest = (req, res) => {
    const location = createMemoryHistory(req.url);
    const reducer = combineReducers({ todos, tasks, tasksReducer, form });
    const logger = createLogger({ collapsed: (getState, action) => action.type });
    const store = applyMiddleware(promiseMiddleware, thunk, logger)(createStore)(reducer);
    match({ routes,
        location, }, (err, redirectLocation, renderProps) => {
        if (err) {
          console.error('error fro m match', err);
          return res.status(500).end('Internal server error');
        }
        
        if (!renderProps)
            return res.status(404).end('Not found');
        
        function renderView() {
          const InitialView = (
              <Provider store={store}>
                    <RouterContext {...renderProps}/>
                </Provider>
          );
          
          const componentHTML = renderToString(InitialView);
          const initialState = store.getState();
          const HTML = `
            <!DOCTYPE html>
                <html>
                  <head>
                      <meta charset="utf-8">
                      <title>Redux Demo</title>
                      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
                      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
                      <script>
                        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                      </script>
                  </head>
                  <body>
                    <div id="react-view">${componentHTML}</div>
                    <script type="application/javascript" src="/bundle.js"></script>
                  </body>
                </html>
                     `;
          return HTML;
        }
        
        fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
        .then(renderView)
        .then(html => res.end(html))
        .catch(err => res.end(err.message));
      });
  };
