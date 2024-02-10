const fastify = require(`fastify`)({logger: true});
const port = process.env.APP_PORT || 3000
const createServer = async (options) => {
  try {
      // routes
      require(`./src/routes/api`)(fastify);

      await fastify.listen(port, `0.0.0.0`);
      fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
      fastify.log.error(err);
      process.exit(1);
  }
};

module.exports = {
  createServer,
};