import webpack from 'webpack';
import assign from 'object-assign';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import prodCfg from './webpack.prod.config.js';

Object.assign = assign;

const BABEL_QUERY = {
	presets: ['react', 'es2015'],
	plugins: [
		['transform-object-rest-spread'],
		['transform-class-properties'],
		['transform-decorators-legacy'],
		[
			'react-transform', {
				transforms: [{
					transform: 'react-transform-hmr',
					imports: ['react'],
					locals: ['module'],
				}, ],
			},
		],
	],
};

export default function(app) {
	const config = Object.assign(prodCfg, {
		devtool: 'inline-source-map',
		entry: [
			'webpack-hot-middleware/client',
			'./client',
		],
		module: {
			loaders: [{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: BABEL_QUERY,
			}, ],
		},
		plugins: [
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoErrorsPlugin(),
		],
		// Some libraries import Node modules but don't use them in the browser.
		// Tell Webpack to provide empty mocks for them so importing them works.
		node: {
			fs: 'empty',
			net: 'mock',
			tls: 'mock',
			dns: 'mock',
			net: 'mock',
		},
	});

	const compiler = webpack(config);

	app.use(webpackDevMiddleware(compiler, { noInfo: true }));
	app.use(webpackHotMiddleware(compiler));
}