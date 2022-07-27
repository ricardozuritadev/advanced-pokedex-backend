// MODULES
const { sql } = require('slonik');

// getFullTrainer function
const getFullTrainer = db => async email => {
  try {
    const result = await db.maybeOne(sql`
        SELECT * FROM trainers
        WHERE email = $(email)
    `);

    return {
      ok: true,
      data: result,
    };
  } catch (error) {
    console.error('> [getFullTrainer]: ', error.message);

    return {
      ok: false,
    };
  }
};

// createTrainer function
const createTrainer = db => async (email, nickname) => {
  try {
    // Do the query to DB to get trainer to chek if he already exists
    const trainer = await getFullTrainer(db)(email);

    // Return register error if user already exists
    if (trainer.data) {
      return {
        ok: false,
        code: 'duplication',
      };
    }

    // If trainer not exists, insert into DB
    await db.query(sql`
        INSERT INTO trainers (
            email, nickname, password
        ) VALUES (
            ${email}, ${nickname}, ${password}
        )
    `);

    return {
      ok: true,
    };
  } catch (error) {
    console.error('> [createTrainer]: ', error.messsage);

    return {
      ok: false,
    };
  }
};

module.exports = {
  getFullTrainer,
  createTrainer,
};
