const { sql } = require('slonik');

const selectFullTrainer = ({ nickname }) => {
  return sql`
    SELECT * FROM trainers
    WHERE nickname = ${nickname}
  `;
};

const insertTrainer = ({
  email,
  nickname,
  gendre,
  password,
  passwordConfirm,
}) => {
  return sql`
    INSERT INTO trainers (
        email, nickname, gendre, password, password_confirm
    ) VALUES (
        ${email}, ${nickname}, ${gendre}, ${password}, ${passwordConfirm}
    )
  `;
};

module.exports = {
  selectFullTrainer,
  insertTrainer,
};
