const { sql } = require('slonik');

const selectFullTrainer = email => {
  return sql`
    SELECT * FROM trainers
    WHERE email = ${email}
  `;
};

const insertTrainer = (email, nickname, password) => {
  return sql`
    INSERT INTO trainers (
        email, nickname, password
    ) VALUES (
        ${email}, ${nickname}, ${password}
    )
  `;
};

module.exports = {
  selectFullTrainer,
  insertTrainer,
};
