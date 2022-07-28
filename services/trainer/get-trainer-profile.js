const { getFullTrainer } = require('../../queries/auth');
const error = require('../../errors/commons');

// GET LOGGED TRAINER INFO CONTROLLER
module.exports = db => async (req, res, next) => {
  // Get nickname from res.locals
  const { nickname } = res.locals;

  // Ask DB for trainer with the nikckname
  const queryResult = await getFullTrainer(db)({ nickname });

  // If trainer not exists, return "400" generic error
  if (!queryResult.ok) return next(error[400]);

  // If everithing is ok, return trainer info to the client
  // const {} = queryResult, aquí van campos extra como el birthdate, role, etc etc

  res.status(200).json({
    success: true,
    data: {
      email: queryResult.data.email,
      nickname,
    },
  });
};
