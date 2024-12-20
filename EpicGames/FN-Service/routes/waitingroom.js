async function waitingroom(fastify, options) {
    fastify.get('/waitingroom/api/waitingroom', (request, reply) => {
        reply.status(204).send();
    })
}

module.exports = waitingroom;