async function twitch(fastify, options) {
    // used on old builds, prolly not even worth doing
    fastify.get('/fortnite/api/game/v2/twitch/:accountId', (request, reply) => {
        reply.status(204).send();
    })
}

module.exports = twitch;