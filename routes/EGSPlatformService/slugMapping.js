async function slugMapping(fastify, options) {
    fastify.get('/api/v1/egs/mappings/:slug', (request, reply) => {
        reply.status(200).send({
            "__typename": "OfferMapping",
            "modules": {
                "pageOffers": [
                    {
                        "__typename": "MappingPageOfferModule",
                        "categories": [
                            "games",
                            "games/edition",
                            "games/edition/base",
                            "attention/in-app-purchases/supported",
                            "applications"
                        ],
                        "effectiveDate": 1505912400000,
                        "offerId": "09176f4ff7564bbbb499bbe20bd6348f",
                        "sandboxId": "fn",
                        "store": "EGS"
                    }
                ]
            },
            "productId": "prod-fn",
            "sandboxId": "fn",
            "slug": "fortnite"
        })
    })
}

module.exports = slugMapping;