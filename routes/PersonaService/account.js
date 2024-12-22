async function account(fastify, options) {
    fastify.get('/persona/api/public/account/lookup', (request, reply) => {
        reply.status(200).send({
            "id": "ArcaneV5",
            "displayName": "ArcaneV5"
        })
    })
}

module.exports = account;