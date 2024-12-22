const User = require("../../database/models/user.js");

const errors = require("../../responses/errors.json");
const createError = require("../../utils/error.js");
const tokenVerify = require("../../middlewares/tokenVerify.js");

async function inventory(fastify, options) {
    fastify.get('/fortnite/api/game/v2/br-inventory/account/:accountId', { preHandler: tokenVerify }, async (request, reply) => {
        const accountId = request.user.account_id;
        const user = await User.findOne({ 'accountInfo.id': accountId });
        if (!user) {
            return createError.createError(errors.NOT_FOUND.account.not_found, 404, reply);
        }
        
        reply.status(200).send({
            "stash": user.stash
        })
    })
}

module.exports = inventory;