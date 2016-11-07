import express from 'express';
import path from 'path';
import { handleRequest } from './requestHandler';

const app = express();
console.log('helloo im working no restart');
if (process.env.NODE_ENV !== 'production') {
	require('../webpack.dev').default(app);
}

app.use(express.static(path.join(__dirname, 'dist')));
app.use(handleRequest);

export default app;