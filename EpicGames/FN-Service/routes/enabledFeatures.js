async function enabledFeatures(fastify, options) {
    fastify.get('/fortnite/api/game/v2/enabled_features', (request, reply) => {
        reply.status(200).send(["store"])
    })
}

module.exports = enabledFeatures;