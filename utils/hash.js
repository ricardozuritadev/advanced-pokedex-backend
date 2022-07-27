const bcrypt = require('bcrypt');

// encrypt function
const encrypt = async password => {
  const rounds = 10;
  const salt = await bcrypt.genSalt(rounds);

  return await bcrypt.hash(password, salt);
};

// compare function
const compare = plain => async hash => {
  return bcrypt.compare(plain, hash);
};

module.exports = {
  encrypt,
  compare,
};
