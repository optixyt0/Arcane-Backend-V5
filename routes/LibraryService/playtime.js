async function playtime(fastify, options) {
    // Catagory: Add
    fastify.put('/library/api/public/playtime/account/:accountId', (request, reply) => {
        reply.status(204).send();
    })

    fastify.put('/library/api/public/playtime/account/:accountId/bulk', (request, reply) => {
        reply.status(200).send();
    })

    // Catagory: Info
    fastify.get('/library/api/public/playtime/account/:accountId/all', (request, reply) => {
        reply.status(200).send([])
    })

    fastify.get('/library/api/public/playtime/account/:accountId/artifact/:artifactId', (request, reply) => {
        reply.status(200).send({
            "accountId": request.params.accountId,
            "artifactId": "Fortnite",
            "totalTime": 0
        })
    })
}

module.exports = playtime;