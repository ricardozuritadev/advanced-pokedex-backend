module.exports = {
  generic: {
    empty: {
      statusCode: 400,
      error: new Error('all fileds are mandatory'),
    },
  },
  register: {
    duplication: {
      statusCode: 400,
      error: new Error('user already exists'),
    },
  },
  login: {
    unknown: {
      statusCode: 400,
      error: new Error('user or password incorrect'),
    },
  },
};
