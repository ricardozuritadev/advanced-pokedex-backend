const router = require('express').Router();
const authorizer = require('../../middlewares/authorizer');

module.exports = db => {
  router.post('/register', require('./register')(db));
  router.post('/login', require('./login')(db));
  router.post('/logout', authorizer, require('./logout')(db));

  return router;
};
