const { getCorrectTrainer } = require('../../queries/auth');
const { compare } = require('../../utils/hash');
const { generic, login } = require('../../errors/auth');
const errors = require('../../errors/commons');

module.exports = db => async (req, res, next) => {
  const { nickname, password } = req.body;

  if (!nickname || !password) return next(generic['empty']);

  const queryResult = await getCorrectTrainer(db)({
    nickname,
    compareFn: compare(password),
  });

  if (!queryResult.ok) return next(login[queryResult.code] || errors[500]);

  res.status(200).json({
    success: true,
  });
};
