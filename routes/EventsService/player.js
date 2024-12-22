async function player(fastify, options) {
    fastify.get('/api/v1/players/:gameId/:accountId', (request, reply) => {
        reply.status(200).send({
            "gameId": "Fortnite",
            "accountId": request.params.accountId,
            "tokens": [
                "Arena_S24_Division1"
            ],
            "teams": {},
            "pendingPayouts": [],
            "pendingPenalties": {},
            "persistentScores": {
                "Hype_S24_P": 0
            },
            "groupIdentity": {
                "GeoIdentity": "United Kingdom"
            }
        })
    })

    fastify.get('/api/v1/players/:gameId/tokens', (request, reply) => {
        reply.status(200).send({
            "accounts": [
                {
                    "accountId": "ArcaneV5",
                    "tokens": [
                        "Arena_S24_Division1"
                    ]
                }
            ]
        })
    })
}

module.exports = player;