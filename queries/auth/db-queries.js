const { sql } = require('slonik');

const selectFullTrainer = ({ nickname }) => {
  return sql`
    SELECT * FROM trainers
    WHERE nickname = ${nickname}
  `;
};

const insertTrainer = ({ email, nickname, password }) => {
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
