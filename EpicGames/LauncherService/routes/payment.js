async function payment(fastify, options) {
    fastify.get('/launcher/api/public/payment/accounts/:accountId/billingaccounts/default', (request, reply) => {
        reply.status(200).send({
            "country": "EN-GB",
            "countrySource": "ACCOUNT",
            "currency": "GBP"
        })
    })
}

module.exports = payment;