async function creator(fastify, options) {
    fastify.get('/api/v1/creator/page/:creatorAccountId', (request, reply) => {
        reply.status(200).send({
            "creatorId": "epic",
            "links": [],
            "hasMore": false
        })
    })
}

module.exports = creator;