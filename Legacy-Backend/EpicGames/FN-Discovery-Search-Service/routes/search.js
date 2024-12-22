async function search(fastify, options) {
    fastify.post('/api/v1/search', (request, reply) => {
        reply.status(200).send({
            "results": []
        })
    })

    fastify.post('/api/v1/creators/search', (request, reply) => {
        reply.status(200).send({
            "results": []
        })
    })
}

module.exports = search;