async function links(fastify, options) {
    // Catagory: Favorites

    // Add
    fastify.post('/api/v1/links/favorites/:accountId/:linkCode', (request, reply) => {
        reply.status(204).send();
    })

    // Check
    fastify.post('/api/v1/links/favorites/:accountId/check', (request, reply) => {
        reply.status(200).send({
            "results": [],
            "hasMore": false
        })
    })

    // List
    fastify.get('/api/v1/links/favorites/:accountId', (request, reply) => {
        reply.status(200).send({
            "results": [],
            "hasMore": false
        })
    })

    // Remove
    fastify.delete('/api/v1/links/favorites/:accountId/:linkCode', (request, reply) => {
        reply.status(204).send();
    })

    // Catagory: History

    // Add
    fastify.post('/api/v1/links/history/:accountId/:linkCode', (request, reply) => {
        reply.status(204).send();
    })

    // List
    fastify.get('/api/v1/links/history/:accountId', (request, reply) => {
        reply.status(200).send({
            "results": [],
            "hasMore": false
        })
    })

    // Remove
    fastify.delete('/api/v1/links/history/:accountId/:linkCode', (request, reply) => {
        reply.status(204).send();
    })

    // Catagory: Lock-Management
    fastify.post('/api/v1/links/lock-status/:accountId/check', (request, reply) => {
        reply.status(200).send({
            "results": [],
            "hasMore": false
        })
    })

    fastify.get('/api/v1/links/unlock/:accountId', (request, reply) => {
        reply.status(200).send({
            "results": [],
            "hasMore": false
        })
    })

    fastify.delete('/api/v1/links/legacy-unlock/:accountId', (request, reply) => {
        reply.status(204).send();
    })

    fastify.put('/api/v1/links/unlock/:accountId/:linkCode', (request, reply) => {
        reply.status(204).send();
    })

    // Catagory: Queue

    // idk the response
    fastify.post('/api/v1/links/queue/:accountId/:linkCode', (request, reply) => {
        reply.status(204).send();
    })

    // idk the response
    fastify.get('/api/v1/links/queue/:accountId', (request, reply) => {
        reply.status(204).send();
    })
}

module.exports = links;