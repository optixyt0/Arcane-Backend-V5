async function products(fastify, options) {
    // Catagory: Uncatagorized
    fastify.get('/api/v1/egs/products/:productId/critic-reviews/open-critic', (request, reply) => {
        reply.status(200).send({
            "__typename": "ProductCriticReviewsEnabled",
            "criticReviews": {
                "__typename": "CriticReviews",
                "criticAverage": 84,
                "criticRating": "Mighty",
                "recommendPercentage": 93,
                "reviews": {
                    "__typename": "PaginatedCriticReviews",
                    "data": [
                        {
                            "author": "Ford James",
                            "body": "Nobody thought Fortnite would still be popular this late on, but it's continued to adapt and fight for its spot at the top of the battle royale ladder.",
                            "outlet": "GamesRadar+",
                            "score": {
                                "__typename": "CriticReviewStarScore",
                                "earnedStars": 4,
                                "totalStars": 5
                            },
                            "url": "https://www.gamesradar.com/fortnite-review/"
                        }
                    ],
                    "paging": {
                        "count": 1,
                        "start": 0,
                        "total": 3
                    }
                },
                "url": "https://opencritic.com/game/6228/fortnite-battle-royale"
            }
        })
    })

    fastify.get('/api/v1/egs/products/:productId', (request, reply) => {
        reply.status(200).send({
            "__typename": "Product",
            "branding": {
                "dark": {
                    "accentColor": "#F5CA23",
                    "brandColor": "gray"
                },
                "light": {
                    "accentColor": "#F5CA23",
                    "brandColor": "gray"
                },
                "preferredMode": "dark"
            },
            "developers": ["Epic Games"],
            "id": "prod-fn",
            "mapping": {
                "__typename": "InternalMapping",
                "slug": "fortnite"
            },
            "media": {
                "card16x9": {
                    "imageSrc": "https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb"
                },
                "card3x4": {
                    "imageSrc": "https://cdn1.epicgames.com/offer/fn/Blade_1200x1600_1200x1600-fcea56f5eb92df731a89121e2b4416b5"
                },
                "logo": {
                    "altText": "Fortnite Logo",
                    "imageSrc": "https://cdn2.unrealengine.com/24br-s24-egs-launcher-logo-350x100-350x100-b63249f937d9.png"
                }
            },
            "publishers": ["Epic Games"],
            "shortDescription": "Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more.  Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.",
            "supportedModules": {
                "addOns": true,
                "criticReviews": {
                    "openCritic": true
                },
                "editions": false,
                "experiences": true,
                "mods": "Unsupported"
            },
            "tags": {
                "accessibility": [],
                "epicFeatures": [],
                "events": [],
                "features": [
                    {
                        "id": "1264",
                        "name": "Co-op"
                    },
                    {
                        "id": "1299",
                        "name": "Competitive"
                    },
                    {
                        "id": "9549",
                        "name": "Controller Support"
                    },
                    {
                        "id": "1203",
                        "name": "Multiplayer"
                    },
                    {
                        "id": "1370",
                        "name": "Single Player"
                    }
                ],
                "genres": [
                    {
                        "id": "1216",
                        "name": "Action"
                    },
                    {
                        "id": "1210",
                        "name": "Shooter"
                    }
                ],
                "platforms": [
                    {
                        "id": "9547",
                        "name": "Windows"
                    }
                ],
                "usersSay": [
                    {
                        "id": "21139",
                        "name": "Amazing Characters"
                    },
                    {
                        "id": "21140",
                        "name": "Amazing Storytelling"
                    },
                    {
                        "id": "21125",
                        "name": "Competitive Community"
                    },
                    {
                        "id": "21122",
                        "name": "Diverse Characters"
                    },
                    {
                        "id": "21141",
                        "name": "Extremely Fun"
                    },
                    {
                        "id": "21149",
                        "name": "Quickly Understand the Controls"
                    },
                    {
                        "id": "21138",
                        "name": "Recommend this Game"
                    }
                ]
            },
            "title": "Fortnite"
        })
    })

    // Catagory: Offers
    fastify.get('/api/v1/egs/products/:productId/featured-offers/add-ons', (request, reply) => {
        reply.status(200).send({
            "__typename": "PaginatedOffers",
            "data": [
                {
                    "__typename": "Offer",
                    "attention": {
                        "earlyAccess": {
                            "earlyAccess": false
                        },
                        "inAppPurchases": {
                            "support": "None"
                        },
                        "nftBlockchain": {
                            "nftBlockchain": false
                        }
                    },
                    "categories": ["addons", "addons/durable"],
                    "developers": ["Epic Games"],
                    "id": "ce270cdcc5404dc68305158c31850013",
                    "initialPcReleaseDate": 1713398400000,
                    "mapping": {
                        "__typename": "InternalMapping",
                        "slug": "fortnite--shrieking-star-quest-pack"
                    },
                    "media": {
                        "card16x9": {
                            "imageSrc": "https://cdn1.epicgames.com/offer/fn/EN_29_2560x1440-a719ea7c71767a677dcf06e418f25829"
                        },
                        "card3x4": {
                            "imageSrc": "https://cdn1.epicgames.com/offer/fn/EN_29_1200x1600-d48ee6445243f0086278062e5f136d86"
                        }
                    },
                    "productId": "prod-fn",
                    "publishers": ["Epic Games"],
                    "purchase": [
                        {
                            "offerLifecycleState": "Release",
                            "priceDisplay": "$8.99",
                            "purchasePayload": {
                                "offerId": "ce270cdcc5404dc68305158c31850013",
                                "sandboxId": "fn"
                            },
                            "purchaseStateEffectiveDate": 1715510520000,
                            "status": "AvailableToPurchase"
                        },
                        {
                            "offerEffectivenessState": "Expired",
                            "purchasePayload": {
                                "offerId": "ce270cdcc5404dc68305158c31850013",
                                "sandboxId": "fn"
                            },
                            "purchaseStateEffectiveDate": 1715731200000,
                            "status": "Unavailable"
                        }
                    ],
                    "refundType": "NonRefundable",
                    "releaseDate": {
                        "timestamp": 1713398400000,
                        "type": "ExactDate"
                    },
                    "shortDescription": "Rise from the ancient myths to reach for the shrieking stars. Includes an Outfit (with LEGO® Style), Back Bling, Pickaxe and Quests to earn up to 1,000 V-Bucks.",
                    "store": "EGS",
                    "subscription": {
                        "__typename": "SubscriptionUnsupported"
                    },
                    "tags": {
                        "accessibility": [],
                        "epicFeatures": [],
                        "events": [],
                        "features": [],
                        "genres": [],
                        "platforms": [],
                        "usersSay": []
                    },
                    "title": "Shrieking Star Quest Pack"
                }
            ],
            "paging": {
                "count": 1,
                "start": 0,
                "total": 11
            }
        })
    })

    fastify.get('/api/v1/egs/products/:productId/featured-offers/editions', (request, reply) => {
        reply.status(200).send({
            "__typename": "PaginatedOffers",
            "data": [],
            "paging": {
                "count": 0,
                "start": 0,
                "total": 0
            }
        })
    })

    fastify.get('/api/v1/egs/products/:productId/offers/:offerId/age-rating', (request, reply) => {
        reply.status(200).send({
            "__typename": "AgeRating",
            "ageGate": {
                "gate": "age-gate"
            },
            "ageRating": {
                "ageControl": 17,
                "contentDescriptors": [],
                "interactiveElements": [],
                "ratingImage": "https://cdn1.epicgames.com/gameRating/gameRating/ESRB_RP17_136_136x136-d2458f66245ec23152ff2846c7b6de7e",
                "ratingSystem": "ESRB",
                "title": "RATING PENDING"
            }
        })
    })

    fastify.get('/api/v1/private/egs/products/:productId/offers/:offerId/content-controls', (request, reply) => {
        reply.status(200).send({
            "__typename": "OfferContentControl",
            "contentControl": "NoGate"
        })
    })

    fastify.get('/api/v1/private/egs/products/:productId/offers/:offerId/purchasability', (request, reply) => {
        reply.status(200).send({
            "__typename": "OfferPurchasability",
            "purchasability": [
                {
                    "purchasable": "AvailableToClaim",
                    "purchaseStateEffectiveDate": 1715511360000
                }
            ]
        })
    })

    fastify.get('/api/v1/egs/products/:productId/offers/:offerId/subscriptions/benefits', (request, reply) => {
        reply.status(200).send({
            "applicableBenefits": [],
            "offerId": "9ec21a8d4f744f8b938fbf79d02d40b9",
            "sandboxId": "fn"
        })
    })
}

module.exports = products;