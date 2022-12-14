const jwt = require('jsonwebtoken');

// sign token function
const sign = payload => {
  return jwt.sign(payload, process.env.SECRET);
};

// verify token function
const verify = token => {
  try {
    return jwt.verify(token, process.env.SECRET);
  } catch (error) {
    console.log('> [verify]: ', error.message);
    return false;
  }
};

module.exports = {
  sign,
  verify,
};
