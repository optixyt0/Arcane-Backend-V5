async function inventory(fastify, options) {
    fastify.get('/fortnite/api/game/v2/br-inventory/account/:accountId', (request, reply) => {
        reply.status(200).send({
            "stash": {
                "globalcash": 0
            }
        })
    })
}

module.exports = inventory;