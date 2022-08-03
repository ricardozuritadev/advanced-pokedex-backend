// MODULES
const { createTrainer } = require('../../queries/auth');
const { hash, mailer } = require('../../utils');
const { register } = require('../../errors/auth');
const errors = require('../../errors/commons');

module.exports = db => async (req, res, next) => {
  // Read data from body
  const { email, nickname, gendre, password, passwordConfirm } = req.body;

  // If everithing is ok, try insert trainer into DB with createTrainer function
  const queryResult = await createTrainer(db)({
    email,
    nickname,
    gendre,
    password: await hash.encrypt(password),
    passwordConfirm: await hash.encrypt(passwordConfirm),
  });

  // If ok property is false, return error with code property
  // If there's another kind of error, like some misspelled word, return 500 error
  if (!queryResult.ok) return next(register[queryResult.code] || errors[500]);

  // Send welcome message to user email
  await mailer.send({ to: email, type: 'welcome' });

  // If ok is true, return data to client
  res.status(200).json({
    success: true,
  });
};
