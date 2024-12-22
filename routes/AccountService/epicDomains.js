async function epicDomains(fastify, options) {
    fastify.get('/account/api/epicdomains/ssodomains', (request, reply) => {
        reply.status(200).send(["unrealengine.com", "unrealtournament.com", "fortnite.com", "epicgames.com"]);
    })
}

module.exports = epicDomains;