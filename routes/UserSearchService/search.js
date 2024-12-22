async function search(fastify, options) {
    fastify.get('/api/v1/search/:accountId', (request, reply) => {
        reply.status(200).send([
            {
                "accountId": "ArcaneV5",
                "matches": [
                    {
                        "value": "ArcaneV5",
                        "platform": "epic"
                    }
                ],
                "matchType": "exact",
                "epicMutuals": 0,
                "sortPosition": 0
            }
        ])
    })
}

module.exports = search;