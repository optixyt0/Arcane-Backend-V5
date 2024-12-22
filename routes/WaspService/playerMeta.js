async function playerMeta(fastify, options) {
    fastify.get('/api/v1/namespace/:namespaceId/worlds/world/:worldId/playermeta/accountIds/:accountId', (request, reply) => {
        reply.status(200).send({
            "namespaceId": "fn",
            "worldId": "52e1e576226c42ad9563503254f866c1",
            "accountId": request.params.accountId,
            "totalSecondsPlayed": 61,
            "lastPlayed": "2024-08-31T10:08:30.134Z",
            "metadata": {}
        })
    })

    fastify.post('/api/v1/namespace/:namespaceId/worlds/world/:worldId/playermeta/bulk/get', (request, reply) => {
        reply.status(200).send({
            "playermeta": []
        })
    })
}

module.exports = playerMeta;