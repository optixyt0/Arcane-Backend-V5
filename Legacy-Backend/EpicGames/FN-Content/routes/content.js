const errors = require("../responses/errors.json");
const createError = require("../utils/error");

async function content(fastify, options) {
    fastify.get('/content/api/pages/fortnite-game', (request, reply) => {
        reply.status(200).send(require("../responses/fortnite-game.json"));
    })

    fastify.get('/content/api/pages/fortnite-game/:subkey', (request, reply) => {
        const content = require("../responses/fortnite-game.json");
        if (content[request.params.subkey]) {
            return reply.status(200).send(content[request.params.subkey]);
        } else {
            return createError.createError(errors.NOT_FOUND.common, 404, reply);
        }
    })
}

module.exports = content