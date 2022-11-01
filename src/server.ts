import Fastify from "fastify";

async function booststrap() {
 const fastify = Fastify({
  logger: true,
 }) 

 fastify.get('/pools/count', () => {
  return { count: 1233 }
 })

  await fastify.listen({ port: 3333 })

}

booststrap()