const whitelist = [
  'https://advanced-pokedex-backend.onrender.com/',
  'http://localhost:3000',
];

module.exports = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error());
    }
  },
  credentials: true,
};
