const hash = require('./hash');
const jwt = require('./jwt');
const cookie = require('./cookie');
const mailer = require('./mailer');

// SERIALIZE FUNCTION
const serialize = (res, payload) => {
  const token = jwt.sign(payload);
  cookie.create(res, token);
};

// DESERIALIZE FUNCTION
const deserialize = req => {
  // Read cookie from request
  const { access_token } = req.cookies;

  // CHeck if JWT is valid
  const payload = jwt.verify(access_token);

  // If payload is false, return "unauthorized" error
  if (!payload) return false;

  // If payload is true, return payload
  return payload;
};

module.exports = {
  hash,
  jwt,
  cookie,
  mailer,
  serialize,
  deserialize,
};
