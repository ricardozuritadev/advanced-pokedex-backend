// MODULES
const { sql } = require('slonik');
const { queryCatcher } = require('../utils');
const { selectFullTrainer, insertTrainer } = require('./db-queries');

// getFullTrainer function
const getFullTrainer = db => async email => {
  return await queryCatcher(
    db.maybeOne,
    'getFullTrainer'
  )(selectFullTrainer(email));
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
    };
  };

// createTrainer function
const createTrainer =
  db =>
  async ({ email, nickname, password }) => {
    const trainer = await getFullTrainer(db)(email);

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
