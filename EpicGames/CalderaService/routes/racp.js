async function racp(fastify, options) {
    fastify.post('/caldera/api/v1/launcher/racp', (request, reply) => {
        reply.status(200).send({
            "provider": "EasyAntiCheat",
            "jwt": "ArcaneV5"
        })
    })
}

module.exports = racp;