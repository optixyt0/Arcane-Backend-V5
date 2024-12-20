async function patch(fastify, options) {
    // idk the response
    fastify.post('/artifact-delivery/api/public/v1/delivery/account/:accountId/patch', (request, reply) => {
        reply.status(204).send();
    })
}

module.exports = patch;