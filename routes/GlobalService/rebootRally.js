async function rebootRally(fastify, options) {
    fastify.put('/v1/rebootrally/eligibility/friends', (request, reply) => {
        reply.status(200).send({
            "eligibility": []
        })
    })

    fastify.put('/v1/rebootrally/eligibility', (request, reply) => {
        reply.status(200).send({
            "eligibility": []
        })
    })

    // idk the response
    fastify.put('/v1/rebootrally/eligibility/:accountId', (request, reply) => {
        reply.status(204).send();
    })
}

module.exports = rebootRally;