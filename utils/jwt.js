const jwt = require('jsonwebtoken');

// sign function
const sign = payload => {
  return jwt.sign(payload, process.env.SECRET);
};

module.exports = {
  sign,
};
