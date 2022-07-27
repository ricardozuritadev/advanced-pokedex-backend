// MODULES
require('dotenv').config();
const express = require('express');
const db = require('./configs/db');
const errors = require('./errors/commons');

const app = express();

// MIDDLEWARES
// Body parser
app.use(express.json());
// Routes
app.use();
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
app.listen(process.env.PORT || 5000, () => {
  console.log(`> Listening at: ${process.env.PORT || 5000}`);
});
