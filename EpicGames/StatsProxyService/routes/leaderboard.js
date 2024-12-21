async function leaderboard(fastify, options) {
    fastify.get('/statsproxy/api/statsv2/leaderboards/:leaderboardName', (request, reply) => {
        reply.status(200).send({
            "entries": [
                {
                    "account": "ArcaneV5",
                    "value": 7981
                }
            ],
            "maxSize": 1000
        })
    })
}

module.exports = leaderboard;