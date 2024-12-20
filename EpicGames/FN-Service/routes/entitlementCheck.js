async function entitlementCheck(fastify, options) {
    fastify.get('/fortnite/api/entitlementCheck', (request, reply) => {
        reply.status(204).send();
    })
}

module.exports = entitlementCheck;