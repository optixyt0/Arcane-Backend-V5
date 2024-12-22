async function Id(fastify, options) {
    fastify.post('/id/api/login', (request, reply) => {
        reply.status(200).send();
    })
}

module.exports = Id;