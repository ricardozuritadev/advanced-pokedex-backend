const { deserialize } = require('../utils');
const error = require('../errors/commons');

module.exports = (req, res, next) => {
  // Deserialize cookie with utility
  const payload = deserialize(req);

  // If payload is false, return "unauthorized" error
  if (!payload) return next(error[401]);

  // Save user on session ecosystem
  res.locals = { ...payload };

  next();
};
