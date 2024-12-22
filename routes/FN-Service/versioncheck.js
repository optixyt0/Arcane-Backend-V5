async function versionCheck(fastify, options) {
    fastify.get('/fortnite/api/version', (request, reply) => {
        reply.status(200).send({
            "type": "NO_UPDATE"
        })
    })

    fastify.get('/fortnite/api/v2/versioncheck/:platform', (request, reply) => {
        reply.status(200).send({
            "type": "NO_UPDATE"
        })
    })

    fastify.get('/fortnite/api/versioncheck/:platform', (request, reply) => {
        reply.status(200).send({
            "type": "NO_UPDATE"
        })
    })

    fastify.get('/fortnite/api/versioncheck', (request, reply) => {
        reply.status(200).send({
            "type": "NO_UPDATE"
        })
    })

    fastify.post('/fortnite/api/game/v2/tryPlayOnPlatform/account/:accountId', (request, reply) => {
        reply.status(200).send("true");
    })
}

module.exports = versionCheck;