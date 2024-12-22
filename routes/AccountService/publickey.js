async function publickey(fastify, options) {
    fastify.get('/account/api/publickeys/:thumbprint', (request, reply) => {
        reply.status(200).send({
            "kty": "RSA",
            "e": "AQAB",
            "kid": request.params.thumbprint,
            "n": "ArcaneV5"
        })
    })
}

module.exports = publickey;