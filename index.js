// MODULES
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const options = require('./configs/cors');
const cookieParser = require('cookie-parser');
const db = require('./configs/db');
const errors = require('./errors/commons');

const app = express();

// MIDDLEWARES
// Body parser, cookie parser & cors
app.use(cors(options));
// app.use(express.json());
// app.use(cookieParser());

//CORS middleware
var allowCrossDomain = (_, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    'https://advanced-pokedex-frontend.vercel.app/'
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};
//...
app.configure(() => {
  app.use(express.json());
  app.use(express.cookieParser());
  app.use(express.methodOverride());
  app.use(allowCrossDomain);
  // app.use(app.router);
});
// Routes
app.use('/api/v1', require('./services')(db));
// Undefined routes
app.use((_, __, next) => {
  next(errors[404]);
});
// Error middleware
app.use(({ statusCode, error }, _, res, __) => {
  res.status(404).json({
    success: false,
    message: error,
  });
});

// SERVER CONECTION
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`> Listening at: ${PORT}`);
});
