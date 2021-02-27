
import fp from 'fastify-plugin';

export default fp(async (server, opts, next) => {
  server.route({
    url: '/status',
    logLevel: 'warn',
    method: ['GET', "HEAD"],
    handler: async (req, reply) => {
      return reply.send({ works: false })
    }
  })
})