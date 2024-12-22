async function old(fastify, options) {
    // Catagory: Blocklist

    // Block account
    fastify.get('/friends/api/public/blocklist/:accountId/:userId', (request, reply) => {
        reply.status(204).send();
    })

    // List
    fastify.get('/friends/api/public/blocklist/:accountId', (request, reply) => {
        reply.status(200).send({
            "blockedUsers": []
        })
    })

    // Unblock
    fastify.delete('/friends/api/public/blocklist/:accountId/:userId', (request, reply) => {
        reply.status(204).send();
    })

    // Catagory: Friends

    // Add
    fastify.post('/friends/api/public/friends/:accountId/:friendId', (request, reply) => {
        reply.status(204).send();
    })

    // Remove
    fastify.delete('/friends/api/public/friends/:accountId/:friendId', (request, reply) => {
        reply.status(204).send();
    })

    // Clear friends list
    fastify.delete('/friends/api/public/friends/:accountId', (request, reply) => {
        reply.status(204).send();
    })

    // List
    fastify.get('/friends/api/public/friends/:accountId', (request, reply) => {
        reply.status(200).send([])
    })
}

module.exports = old;