const queryCatcher =
  (fn, origin) =>
  async (...args) => {
    try {
      const result = await fn(...args);

      return {
        ok: true,
        data: result && result.rows ? result.rows : result, // Devuelve result.rows si veiene de db.query() o devuelve result si viene de db.maybeOne()
      };
    } catch (error) {
      console.error(`> [${origin}]: `, error.message);

      return {
        ok: false,
      };
    }
  };

module.exports = {
  queryCatcher,
};
