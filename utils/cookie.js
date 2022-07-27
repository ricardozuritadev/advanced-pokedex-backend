const create = (res, token, expTime = 300000) => {
  res.cookie('access_token', token, {
    expires: new Date(Date.now() + expTime),
    secure: false,
    httpOnly: true,
  });
};

module.exports = {
  create,
};
