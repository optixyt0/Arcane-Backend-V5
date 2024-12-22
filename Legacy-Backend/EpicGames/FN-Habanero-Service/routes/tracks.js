async function tracks(fastify, options) {
    fastify.get('/api/v1/games/:namespace/tracks/byGUID/:trackguid', (request, reply) => {
        reply.status(200).send({
            "gameId": "fortnite",
            "trackguid": request.params.trackguid,
            "rankingType": "ranked-br",
            "beginTime": "2023-04-01T00:00:00Z",
            "endTime": "2023-06-20T08:00:00Z",
            "divisionCount": 18
        })
    })

    fastify.get('/api/v1/games/:namespace/tracks/query', (request, reply) => {
        reply.status(200).send([])
    })

    fastify.get('/api/v1/games/fortnite/tracks/activeBy/:startDate', (request, reply) => {
        reply.status(200).send([])
    })
}

module.exports = tracks;