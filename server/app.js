global.navigator = global.navigator || {};
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { server as serverConfig } from '../config';
import { TaskRoutes } from './routes';
import { handleRequest } from './requestHandler';

const app = express();
if (process.env.NODE_ENV !== 'production') {
	require('../webpack.dev').default(app);
}

mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
	if (error) {
		console.error(
			'Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
		throw error;
	}

	console.log('mongoose connected');
});

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use((req, res, next) => {
	const userAgent = req.headers['user-agent'] || 'all';
	global.navigator = global.navigator || { userAgent };
	console.log(navigator);
	global.navigator.userAgent = userAgent;
	next();
});
app.use('/api', TaskRoutes);
app.use(handleRequest);

export default app;