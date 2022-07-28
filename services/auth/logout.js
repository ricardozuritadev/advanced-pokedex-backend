const { cookie } = require('../../utils');

module.exports = () => async (_, res) => {
  // Clear cookie
  cookie.clear(res);

  // Send success response to client
  res.status(200).json({
    success: true,
  });
};
