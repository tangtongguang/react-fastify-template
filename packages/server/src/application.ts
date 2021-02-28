import fastify, { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import statusRoutes from './modules/routes/status'
import stackRoutes from './modules/routes/stack'
import prisma from './modules/prisma'
const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({
  logger: true
})

server.register(statusRoutes);
server.register(stackRoutes)

server.register(prisma)
function build() {
  server.get('/ping', async (req, reply) => {
    return 'pong\n'
  })

  return server;
}

export default build;