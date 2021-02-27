import application from './application';

const PORT: any = process.env.PORT || 3002;
const fastify = application();

const start = async () => {
  try {
    await fastify.listen(PORT, '0.0.0.0');


  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
