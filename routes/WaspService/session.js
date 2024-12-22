async function session(fastify, options) {
    // idk the response
    fastify.put('/api/v1/namespace/:namespaceId/worlds/world/:worldId/session/heartbeat', (request, reply) => {
        reply.status(204).send();
    })

    // idk tje response
    fastify.put('/api/v1/namespace/:namespaceId/worlds/world/:worldId/session/remove', (request, reply) => {
        reply.status(204).send();
    })

    fastify.get('/api/v1/namespace/:namespaceId/worlds/world/:worldId/session', (request, reply) => {
        reply.status(200).send({
            "namespaceId": "fn",
            "worldId": "9f5f4fe52d594e0abe3bca3edf62899f",
            "owningSessionId": "a9c000a954e64c328fd925b5953f30b5",
            "sessionKey": "AFD235593B504E6EA9007E1FB5BC8F20",
            "currentPlayers": [],
            "sessionCreatedAt": "2023-12-08T16:51:31.912Z",
            "lastServerHeartbeat": "2023-12-08T18:48:07.543112137Z",
            "totalSecondsPlayed": null
        })
    })
}

module.exports = session;