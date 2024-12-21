async function invites(fastify, options) {
    fastify.post('/api/v1/namespace/:namespaceId/invites/world/:worldId', (request, reply) => {
        reply.status(201).send()
    })

    // idk the response
    fastify.delete('/api/v1/namespace/:namespaceId/invites/world/:worldId', (request, reply) => {
        reply.status(204).send();
    })

    // idk the response
    fastify.get('/api/v1/namespace/:namespaceId/invites/world/:worldId', (request, reply) => {
        reply.status(204).send();
    })
}

module.exports = invites;