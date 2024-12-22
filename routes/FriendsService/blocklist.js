async function blocklist(fastify, options) {
    // Block
    fastify.post('/friends/api/v1/:accountId/blocklist/:userId', (request, reply) => {
        reply.status(204).send();
    })

    // Clear
    fastify.delete('/friends/api/public/blocklist/:accountId', (request, reply) => {
        reply.status(204).send();
    })

    // List
    fastify.get('/friends/api/v1/:accountId/blocklist', (request, reply) => {
        reply.status(200).send([]);
    })

    // Unblock
    fastify.delete('/friends/api/v1/:accountId/blocklist/:userId', (request, reply) => {
        reply.status(204).send();
    })
}

module.exports = blocklist;