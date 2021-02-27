

import fp from 'fastify-plugin';

const stack: any[] = [];
const itemValidation = {
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
      return reply.send(stack)
    }
  })

  server.post('/add/item', itemValidation, (req, reply) => {
    const item = req.body.item;

    stack.push(item);
    reply.send(stack);
  })
})