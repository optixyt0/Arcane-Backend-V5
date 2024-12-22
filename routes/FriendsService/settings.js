async function settings(fastify, options) {
    // Catagory: ExternalSourceSettings
    fastify.get('/friends/api/v1/:accountId/settings/externalSources/:source', (request, reply) => {
        reply.status(200).send({})
    })

    fastify.put('/friends/api/v1/:accountId/settings/externalSources/:source', (request, reply) => {
        reply.status(200).send({})
    })

    // Catagory: PrivacySettings
    fastify.get('/friends/api/v1/:accountId/settings', (request, reply) => {
        reply.status(200).send({})
    })

    fastify.patch('/friends/api/v1/:accountId/settings', (request, reply) => {
        reply.status(200).send({})
    })

    // Deprecated (changed to patch (the route above))
    fastify.put('/friends/api/v1/:accountId/settings', (request, reply) => {
        reply.status(200).send({});
    })
}

module.exports = settings;