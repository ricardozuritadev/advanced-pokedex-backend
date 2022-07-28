const { deserialize, cookie } = require('../../utils');
const error = require('../../errors/commons');

module.exports = db => async (req, res, next) => {
  // Deserialize cookie with utility
  const payload = deserialize(req);

  // If payload is false, return "unauthorized" error
  if (!payload) return next(error[401]);

  // Clear cookie
  cookie.clear(res);

  // Send success response to client
  res.status(200).json({
    success: true,
  });
};
