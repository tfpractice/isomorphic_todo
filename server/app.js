// global.navigator = global.navigator || {};
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { TaskRoutes } from './routes';
import { handleRequest } from './requestHandler';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'express-flash';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import expressValidator from 'express-validator';
import { server as srvConf } from '../config';
const { mongoURL } = srvConf;

const app = express();
if (process.env.NODE_ENV !== 'production') {
  require('../webpack.dev').default(app);
}

mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(mongoURL, (error) => {
  if (error) {
    console.error(
      'Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
  
  console.log('mongoose connected');
});

// BodyParser Middleware
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'dist')));

// Express Session
app.use(session({ secret: 'secret',
    saveUninitialized: true,
    resave: true, }));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({ errorFormatter: function(param, msg, value) {
      var namespace = param.split('.'), root    = namespace.shift(), formParam = root;
      
      while (namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      
      return { param: formParam,
          msg: msg,
          value: value, };
    }, }));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

app.use((req, res, next) => {
  global.navigator = { userAgent: 'all' };
  next();
});
app.use('/api', TaskRoutes);
app.use(handleRequest);

export default app;
