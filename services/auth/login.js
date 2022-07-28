const { getCorrectTrainer } = require('../../queries/auth');
const { hash, serialize } = require('../../utils');
const { login } = require('../../errors/auth');
const errors = require('../../errors/commons');

module.exports = db => async (req, res, next) => {
  // Read data from body
  const { nickname, password } = req.body;

  // If everithing is ok, get correct trainer from DB
  const queryResult = await getCorrectTrainer(db)({
    nickname,
    compareFn: hash.compare(password),
  });

  // If ok properti is false, return login error or internal server error
  if (!queryResult.ok) return next(login[queryResult.code] || errors[500]);

  // Serialize token
  serialize(res, { nickname: queryResult.data.nickname });

  // Send success response to client
  res.status(200).json({
    success: true,
  });
};
