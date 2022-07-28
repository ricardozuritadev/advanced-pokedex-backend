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
app.use(express.json());
app.use(cookieParser());
// Routes
app.use('/api/v1', require('./services')(db));
// Undefined routes
app.use((_, __, next) => {
  next(errors[404]);
});
// Error middleware
app.use(({ statusCode, error }, _, res, __) => {
  res.status(statusCode).json({
    success: false,
    message: error.message,
  });
});

// SERVER CONECTION
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`> Listening at: ${PORT}`);
});
