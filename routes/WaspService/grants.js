async function grants(fastify, options) {
    fastify.get('/api/v1/namespace/:namespaceId/grants/world/:worldId/account/:accountId', (request, reply) => {
        reply.status(200).send([
            {
                "namespaceId": "fn",
                "worldId": "0ad1bf7c2c224b6e9418d3a2c02b5ee7",
                "accountId": "ArcaneV5",
                "roleId": "world_owner",
                "type": "PERSISTENT",
                "grantedBy": "system",
                "grantedAt": "2023-12-03T16:53:35.63368256Z",
                "expiresAt": "-999999999-01-01T00:00:00+18:00"
            }
        ])
    })

    // idk the response
    fastify.post('/api/v1/namespace/:namespaceId/grants/world/:worldId', (request, reply) => {
        reply.status(204).send();
    })

    fastify.delete('/api/v1/namespace/:namespaceId/grants/world/:worldId/account/:accountId', (request, reply) => {
        reply.status(200).send()
    })

    fastify.delete('/api/v1/namespace/:namespaceId/grants/world/:worldId', (request, reply) => {
        reply.status(200).send()
    })

    fastify.get('/api/v1/namespace/:namespaceId/grants/world/:worldId', (request, reply) => {
        reply.status(200).send([
            {
                "namespaceId": "fn",
                "worldId": "0ad1bf7c2c224b6e9418d3a2c02b5ee7",
                "accountId": "ArcaneV5",
                "roleId": "world_owner",
                "type": "PERSISTENT",
                "grantedBy": "system",
                "grantedAt": "2023-12-03T16:53:35.63368256Z",
                "expiresAt": "-999999999-01-01T00:00:00+18:00"
            }
        ])
    })
}

module.exports = grants;