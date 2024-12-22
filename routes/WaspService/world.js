async function world(fastify, options) {
    fastify.post('/api/v1/namespace/:namespaceId/worlds/world/:worldId/inputRestrictions/:restrictionId/check', (request, reply) => {
        reply.status(200).send({
            "allowed": true
        })
    })

    // idk the response
    fastify.get('/api/v1/namespace/:namespaceId/worlds/world/:worldId/attest/:accountId', (request, reply) => {
        reply.status(204).send();
    })

    // idk the response
    fastify.delete('/api/v1/namespace/:namespaceId/worlds/world/:worldId/pendingActions/action/:actionId', (request, reply) => {
        reply.status(204).send();
    })

    fastify.delete('/api/v1/namespace/:namespaceId/worlds/world/:worldId', (request, reply) => {
        reply.status(204).send();
    })

    fastify.put('/api/v1/namespace/:namespaceId/worlds/world/:worldId', (request, reply) => {
        reply.status(200).send({
            "namespaceId": "fn",
            "worldId": "52e1e576226c42ad9563503254f866c1",
            "ownerAccountId": "ArcaneV5",
            "version": 0,
            "currentVersion": 0,
            "name": "5",
            "customName": "ArcaneV5",
            "customNameChangeAllowedAt": "2024-08-31T10:26:32.394266599Z",
            "createdAt": "2024-05-07T17:13:58.250022091Z",
            "updatedAt": "2024-05-07T17:17:52.993752952Z",
            "sanction": null,
            "metadataConstraint": "nometadata",
            "metadata": {},
            "session": {
                "owningSessionId": null,
                "sessionKey": null,
                "currentPlayers": null,
                "sessionCreatedAt": null,
                "lastServerHeartbeat": "2024-08-31T10:08:45.556731589Z",
                "totalSecondsPlayed": 215
            },
            "pendingActions": []
        })
    })

    fastify.get('/api/v1/namespace/:namespaceId/worlds/world/:worldId', (request, reply) => {
        reply.status(200).send({
            "namespaceId": "fn",
            "worldId": "52e1e576226c42ad9563503254f866c1",
            "ownerAccountId": "ArcaneV5",
            "version": 0,
            "currentVersion": 0,
            "name": "5",
            "customName": "ArcaneV5",
            "customNameChangeAllowedAt": "2024-08-31T10:26:32.394266599Z",
            "createdAt": "2024-05-07T17:13:58.250022091Z",
            "updatedAt": "2024-05-07T17:17:52.993752952Z",
            "sanction": null,
            "metadataConstraint": "nometadata",
            "metadata": {},
            "session": {
                "owningSessionId": null,
                "sessionKey": null,
                "currentPlayers": null,
                "sessionCreatedAt": null,
                "lastServerHeartbeat": "2024-08-31T10:08:45.556731589Z",
                "totalSecondsPlayed": 215
            },
            "pendingActions": []
        })
    })
}

module.exports = world;