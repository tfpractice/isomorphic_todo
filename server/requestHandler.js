import express from 'express';
import React from 'react';
import thunk from 'redux-thunk';
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from '../imports/routes';
import { Provider } from 'react-redux';
import { todos } from '../imports/todos';
import { reducer as tasks, tasksReducer } from '../imports/tasks';

import promiseMiddleware from '../imports/lib/promiseMiddleware';
import fetchComponentData from '../imports/lib/fetchComponentData';
import { createStore, combineReducers, applyMiddleware } from 'redux';

export const handleRequest = (req, res, next) => {
	const location = createLocation(req.url);
	const reducer = combineReducers({
		todos,
		tasks,
		tasksReducer,
	});
	const store = applyMiddleware(promiseMiddleware, thunk)(createStore)(
		reducer);

	match({ routes, location, }, (err, redirectLocation, renderProps) => {
		if (err) {
			console.error('error from match', err);
			return res.status(500).end('Internal server error');
		}

		if (!renderProps)
			return res.status(404).end('Not found');

		function renderView() {
			const InitialView = (
				<Provider store={store}>
                  <RoutingContext {...renderProps} />
             </Provider>
			);

			const componentHTML = renderToString(InitialView);
			const initialState = store.getState();
			const HTML =
				`
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

		fetchComponentData(store.dispatch, renderProps.components,
				renderProps.params)
			.then(renderView)
			.then(html => res.end(html))
			.catch(err => res.end(err.message));
	});
};