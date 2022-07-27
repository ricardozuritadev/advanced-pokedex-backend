const router = require('express').Router();

module.exports = db => {
  router.use('/auth', require('./auth')(db));

  return router;
};
