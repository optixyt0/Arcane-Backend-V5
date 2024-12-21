async function progress(fastify, options) {
    fastify.post('/api/v1/games/:namespace/trackprogress/byAccountIds/:trackguid', (request, reply) => {
        reply.status(200).send([])
    })

    fastify.get('/api/v1/games/:namespace/trackprogress/:accountId/byTrack/:trackguid', (request, reply) => {
        reply.status(200).send({
            "gameId": "fortnite",
            "trackguid": request.params.trackguid,
            "accountId": request.params.accountId,
            "rankingType": "ranked-zb",
            "lastUpdated": "1970-01-01T00:00:00Z",
            "currentDivision": 0,
            "highestDivision": 0,
            "promotionProgress": 0.0,
            "currentPlayerRanking": null
        })
    })

    fastify.get('/api/v1/games/:namespace/trackprogress/:accountId', (request, reply) => {
        reply.status(200).send([])
    })
}

module.exports = progress;