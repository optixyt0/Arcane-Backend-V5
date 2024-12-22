const User = require("../../database/models/user");

const errors = require("../../responses/errors.json");
const createError = require("../../utils/error.js");
const tokenVerify = require("../../middlewares/tokenVerify.js");

async function privacySettings(fastify, options) {
    fastify.get('/fortnite/api/game/v2/privacy/account/:accountId', { preHandler: tokenVerify }, async (request, reply) => {
        const accountId = request.user.account_id;
        const user = await User.findOne({ 'accountInfo.id': accountId });
        if (!user) {
            return createError.createError(errors.NOT_FOUND.account.not_found, 404, reply);
        }
        
        reply.status(200).send(user.privacySettings)
    })

    fastify.post('/fortnite/api/game/v2/privacy/account/:accountId', { preHandler: tokenVerify }, async (request, reply) => {
        const accountId = request.user.account_id;
        const user = await User.findOne({ 'accountInfo.id': accountId });
        if (!user) {
            return createError.createError(errors.NOT_FOUND.account.not_found, 404, reply);
        }
        user.privacySettings = request.body;
        await user.save();
        
        reply.status(200).send(user.privacySettings)
    })
}

module.exports = privacySettings;