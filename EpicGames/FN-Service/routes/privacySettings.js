async function privacySettings(fastify, options) {
    fastify.get('/fortnite/api/game/v2/privacy/account/:accountId', (request, reply) => {
        reply.status(200).send({
            "accountId": request.params.accountId,
            "optOutOfPublicLeaderboards": false
        })
    })

    fastify.post('/fortnite/api/game/v2/privacy/account/:accountId', (request, reply) => {
        reply.status(200).send({
            "accountId": request.params.accountId,
            "optOutOfPublicLeaderboards": false
        })
    })
}

module.exports = privacySettings;