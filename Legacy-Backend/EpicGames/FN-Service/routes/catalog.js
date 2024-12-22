const User = require("../../../global/database/models/user");

const errors = require("../../../global/responses/errors.json");
const createError = require("../../../global/utils/error.js");
const tokenVerify = require("../../../global/middlewares/tokenVerify.js");

async function catalog(fastify, options) {
    fastify.get('/fortnite/api/storefront/v2/catalog', (request, reply) => {
        reply.status(200).send(require("../responses/catalog/catalog.json"))
    })

    fastify.get('/catalog/api/shared/bulk/offers', (request, reply) => {
        reply.status(200).send(require("../responses/catalog/catalog.json"))
    })

    fastify.get('/fortnite/api/storefront/v2/gift/check_eligibility/recipient/:friendId/offer/:offerId', (request, reply) => {
        reply.status(200).send(require("../responses/catalog/giftEligibility.json"))
    })

    fastify.get('/fortnite/api/storefront/v2/keychain', (request, reply) => {
        reply.status(200).send(require("../responses/catalog/keychain.json"))
    })

    fastify.get('/fortnite/api/receipts/v1/account/:accountId/receipts', { preHandler: tokenVerify }, async (request, reply) => {
        const accountId = request.user.account_id;
        const user = await User.findOne({ 'accountInfo.id': accountId });
        if (!user) {
            return createError.createError(errors.NOT_FOUND.account.not_found, 404, reply);
        }
        
        reply.status(200).send(user.receipts);
    })
}

module.exports = catalog;