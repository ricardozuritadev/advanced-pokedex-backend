const { sql } = require('slonik');

const selectFullTrainer = ({ nickname }) => {
  return sql`
    SELECT * FROM trainers
    WHERE nickname = ${nickname}
  `;
};

const insertTrainer = ({ email, nickname, password, passwordConfirm }) => {
  return sql`
    INSERT INTO trainers (
        email, nickname, password, password_confirm
    ) VALUES (
        ${email}, ${nickname}, ${password}, ${passwordConfirm}
    )
  `;
};

module.exports = {
  selectFullTrainer,
  insertTrainer,
};
