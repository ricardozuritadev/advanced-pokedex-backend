const router = require('express').Router();
const forms = require('../../utils/forms-fields');
const { authorizer, checker } = require('../../middlewares');

module.exports = db => {
  router.post(
    '/register',
    checker(...forms.register),
    require('./register')(db)
  );
  router.post('/login', checker(...forms.login), require('./login')(db));
  router.post('/logout', authorizer, require('./logout')(db));

  return router;
};
