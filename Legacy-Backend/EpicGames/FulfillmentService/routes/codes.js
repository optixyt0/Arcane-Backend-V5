async function codes(fastify, options) {
    // Redeem code
    fastify.post('/fulfillment/api/public/accounts/:accountId/codes/:code', (request, reply) => {
        reply.status(200).send({
            "offerId": "5ae93cd2ca5244b6827bb1220ccbdd8d",
            "accountId": request.params.accountId,
            "identityId": request.params.accountId,
            "details": [
                {
                    "entitlementId": "54d6793c97b2404c89699392ac9c9d2e",
                    "entitlementName": "FN_Potassium_Emote",
                    "itemId": "279dc3910ae849a7b223da0fac321868",
                    "namespace": "fn",
                    "country": "DE"
                }
            ]
        })
    })

    fastify.post('/fulfillment/api/public/identities/:identityId/codes/:code', (request, reply) => {
        reply.status(200).send({
            "offerId": "5ae93cd2ca5244b6827bb1220ccbdd8d",
            "accountId": request.params.accountId,
            "identityId": request.params.accountId,
            "details": [
                {
                    "entitlementId": "54d6793c97b2404c89699392ac9c9d2e",
                    "entitlementName": "FN_Potassium_Emote",
                    "itemId": "279dc3910ae849a7b223da0fac321868",
                    "namespace": "fn",
                    "country": "DE"
                }
            ]
        })
    })
}

module.exports = codes;