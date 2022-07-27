const router = require('express').Router();

module.exports = db => {
  router.post('/register', require('./register')(db));

  return router;
};
