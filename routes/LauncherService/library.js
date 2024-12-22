async function library(fastify, options) {
    fastify.get('/launcher/api/public/library/items', (request, reply) => {
        reply.status(200).send({
            "records": [],
            "responseMetadata": {}
        })
    })
}

module.exports = library;