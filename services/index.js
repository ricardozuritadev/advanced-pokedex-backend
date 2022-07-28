const router = require('express').Router();

module.exports = db => {
  router.use('/auth', require('./auth')(db));
  router.use('/trainer-profile', require('./trainer')(db));

  return router;
};
