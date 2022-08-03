//const whitelist = [
//  'https://advanced-pokedex-backend.onrender.com/',
//  'https://advanced-pokedex-frontend.vercel.app/',
//  'http://localhost:3000',
//];

// const whitelist = [
//   'https://advanced-pokedex-frontend.vercel.app/',
// ];

// module.exports = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error());
//     }
//   },
//   credentials: true,
// };

module.exports = {
  origin: 'https://advanced-pokedex-frontend.vercel.app/',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  preflightContinue: false,
};
