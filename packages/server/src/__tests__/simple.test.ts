import fastify, { FastifyInstance } from "fastify"
import { IncomingMessage, Server, ServerResponse } from "http"
import statusRoutes from '../modules/routes/status'
describe("/status", () => {
  let server: FastifyInstance<Server, IncomingMessage, ServerResponse>;

  beforeAll(() => { })

  beforeEach(async () => {
    server = fastify({})
    server.register(statusRoutes)
    await server.ready();
    jest.clearAllMocks()
  })


  it('GET return 200', async done => {
    const response = await server.inject({ method: 'GET', url: '/status' });
    expect(response.statusCode).toEqual(200);
    const payload: { works: boolean } = JSON.parse(response.payload)
    expect(payload).toMatchSnapshot({ works: false })
    done();
  })
})