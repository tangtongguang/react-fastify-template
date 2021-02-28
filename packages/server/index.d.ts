import { PrismaClient } from "@prisma/client";
import { FastifyPluginAsync } from 'fastify'
export interface PrismaPlugin {
  (): PrismaClient
}
interface PluginOptions {

}
declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaPlugin
  }
}

export const prisma: FastifyPluginAsync<PluginOptions>

export default prisma;