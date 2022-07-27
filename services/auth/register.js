// MODULES
const { createTrainer } = require('../../queries/auth');
const { generic, register } = require('../../errors/auth');
const { encrypt } = require('../../utils/hash');
const errors = require('../../errors/commons');

module.exports = db => async (req, res, next) => {
  // Read data from body
  const { email, nickname, password } = req.body;

  // If some field is missing, throw "empty" register error
  if (!email || !nickname || !password) return next(generic['empty']);

  // If everithing is ok, try insert trainer into DB with createTrainer function
  const queryResult = await createTrainer(db)({
    email,
    nickname,
    password: await encrypt(password),
  });

  // If ok property is false, return error with code property
  // If there's another kind of error, like some misspelled word, return 500 error
  if (!queryResult.ok) return next(register[queryResult.code] || errors[500]);

  // If ok is true, return data to client
  res.status(200).json({
    success: true,
  });
};
