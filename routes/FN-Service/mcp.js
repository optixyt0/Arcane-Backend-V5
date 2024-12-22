async function mcp(fastify, options) {
    fastify.post('/fortnite/api/game/v2/profile/:accountId/client/:operation', (request, reply) => {
        reply.status(200).send({
            status: "OK",
            code: 200
        });
    })
}

module.exports = mcp;