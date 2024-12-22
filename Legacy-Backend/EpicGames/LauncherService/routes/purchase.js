async function purchase(fastify, options) {
    fastify.post('/launcher/api/public/purchase/offers/bulk', (request, reply) => {
        reply.status(200).send({})
    })
}

module.exports = purchase;