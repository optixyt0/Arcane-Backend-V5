async function epicId(fastify, options) {
    fastify.post('/account/api/epicid/v1/oauth/tokenInfo', (request, reply) => {
        reply.status(200).send({
            "active": true,
            "token_type": "bearer",
            "expires_in": 14385,
            "expires_at": new Date(Date.now() + 14385 * 1000).toISOString(),
            "client_id": "ec684b8c687f479fadea3cb2ad83f5c6",
            "application_id": "fghi4567FNFBKFz3E4TROb0bmPS8h1GW"
        })
    })
}

module.exports = epicId;