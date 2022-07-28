const { generic } = require('../errors/auth');

module.exports =
  (...fields) =>
  (req, _, next) => {
    // Check if some field is missing with a for of loop, and throw error
    for (const field of fields) {
      if (!req.body[field]) return next(generic['empty']);
    }

    // If everithing is ok, continue
    next();
  };
