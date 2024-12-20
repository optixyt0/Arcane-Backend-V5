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

    fastify.get('/fortnite/api/receipts/v1/account/:accountId/receipts', (request, reply) => {
        reply.status(200).send([])
    })
}

module.exports = catalog;