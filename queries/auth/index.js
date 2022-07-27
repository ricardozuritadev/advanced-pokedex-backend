// MODULES
const { selectFullTrainer, insertTrainer } = require('./db-queries');
const { queryCatcher } = require('../utils');

// getFullTrainer function
const getFullTrainer = db => async nickname => {
  return await queryCatcher(
    db.maybeOne,
    'getFullTrainer'
  )(selectFullTrainer(nickname));
};

// getCorrectTrainer function
const getCorrectTrainer =
  db =>
  async ({ nickname, compareFn }) => {
    const trainer = await getFullTrainer(db)({ nickname });

    if (!trainer.data) {
      return {
        ok: false,
        code: 'unknown',
      };
    }

    const isPasswordCorrect = await compareFn(trainer.data.password);

    if (!isPasswordCorrect) {
      return {
        ok: false,
        code: 'unknown',
      };
    }

    return {
      ok: true,
      data: { nickname: trainer.data.nickname },
    };
  };

// createTrainer function
const createTrainer =
  db =>
  async ({ email, nickname, password }) => {
    const trainer = await getFullTrainer(db)(nickname);

    if (trainer.data) {
      return {
        ok: false,
        code: 'duplication',
      };
    }

    return await queryCatcher(
      db.query,
      'createTrainer'
    )(insertTrainer(email, nickname, password));
  };

module.exports = {
  getFullTrainer,
  getCorrectTrainer,
  createTrainer,
};
