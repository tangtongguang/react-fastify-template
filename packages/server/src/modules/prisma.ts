import fp from 'fastify-plugin'
import { PrismaClient } from '@prisma/client'
import { FastifyInstance } from 'fastify'

export default fp(async (server: FastifyInstance, fn, cb) => {
  const prisma = new PrismaClient()
  server.decorate('prisma', () => {
    return prisma;
  });
  server.addHook('onClose', () => {
    console.log('server prisma close');

    prisma.$disconnect()
  })


  // Close DB connection after the server's connection listeners are stopped
  // Related issue: https://github.com/hapijs/hapi/issues/2839
})