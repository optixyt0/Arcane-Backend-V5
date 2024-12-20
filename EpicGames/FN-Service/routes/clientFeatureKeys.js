async function clientFeatureKeys(fastify, options) {
    // me not know what this does or what the response should be
    fastify.get('/fortnite/api/game/v2/clientfeaturekeys/:accountId', (request, reply) => {
        reply.status(204).send();
    })
}

module.exports = clientFeatureKeys;