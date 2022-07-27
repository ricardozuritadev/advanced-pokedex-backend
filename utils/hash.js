const bcrypt = require('bcrypt');

// Encrypt function
const encrypt = async password => {
  const rounds = 10;
  const salt = await bcrypt.genSalt(rounds);

  return await bcrypt.hash(password, salt);
};

module.exports = {
  encrypt,
};
