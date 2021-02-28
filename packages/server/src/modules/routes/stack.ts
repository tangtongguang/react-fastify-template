
import fastify, { RouteShorthandOptions } from 'fastify';
import fp from 'fastify-plugin';

const stack: any[] = [];
const itemValidation: RouteShorthandOptions = {
  schema: {
    body: {
      type: 'object',
      additionalProperties: false,
      required: [
        'item'
      ],
      properties: {
        item: { type: 'string' }
      }
    }
  }
}
export default fp(async (server, opts, next) => {
  server.route({
    url: '/stack',
    logLevel: 'warn',
    method: ['GET', "HEAD"],
    handler: async (req, reply) => {
      const prisma = server.prisma();
      await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alice@prisma.io',
          posts: {
            create: { title: 'Hello World' },
          },
          profile: {
            create: { bio: 'I like turtles' },
          },
        },
      })
      const allUsers = await prisma.user.findMany({
        include: {
          posts: true,
          profile: true,
        },
      })
      console.dir(allUsers, { depth: null })

      return reply.send(allUsers)

    }
  })

  server.post('/add/item', itemValidation, (req, reply) => {
    const item = req.body.item;

    stack.push(item);
    reply.send(stack);
  })
})