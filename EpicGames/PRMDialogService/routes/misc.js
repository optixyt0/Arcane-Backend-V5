async function misc(fastify, options) {
    fastify.post('/api/v1/fortnite-br/channel/:channelId/target', (request, reply) => {
        reply.status(200).send({
            "parameters": {
                "platform": "Windows",
                "language": "en",
                "serverRegion": "EU",
                "country": "EN-GB",
                "hasSavedEventDate": false,
                "hasAttendedEndOfSeasonS17": false,
                "subscription": false,
                "ownsSaveTheWorld": true,
                "filterRestricted": false,
                "filterConsent": false,
                "filterLimited": false,
                "allowedContentTypes": ["functional", "experience", "marketing"],
                "ratingAuthority": "USK",
                "rating": "USK_AGE_16",
                "socialTags": ["BR - Duos"],
                "battlepass": false,
                "battlepassLevel": 1,
                "accountLevel": 1066,
                "victoryCrownsRoyales": 0,
                "globalCash": 0,
                "battlepassStars": 0,
                "battlepassItemsClaimed": 0,
                "unlockedPages": 14,
                "unlockedBonusPages": 0,
                "progressiveBackblingStage": 0,
                "S21ProgressivePhotonicStrikerPickaxe": 0,
                "completedQuests": ["RaiderPinkSherbetQuestGranted"]
            },
            "tags": ["Product.BR"]
        })
    })

    fastify.post('/api/v1/fortnite-br/interactions', (request, reply) => {
        reply.status(200).send();
    })

    fastify.post('/api/v1/fortnite-br/interactions/contentHash', (request, reply) => {
        reply.status(200).send();
    })

    fastify.post('/api/v1/fortnite-br/surfaces/:surfaceId/target', (request, reply) => {
        reply.status(200).send({
            "contentType": "collection",
            "contentId": "fortnite-br-br-motd-collection",
            "tcId": "a6d01bae-3853-4154-80b7-da72e01f3c6e",
            "contentMeta": "{\"7a427ff816c8321910c5b6020dd410a4\":[\"0ac665f8-24f4-4ddf-85a4-8557293aba53\"],\"303f130defae555b2621a189b09f3441\":[\"e7c01ef8-d51b-438b-b655-a5fc93530662\"],\"5532ab90cff25c1f66ca1f605cb97d11\":[\"f78c8632-0b86-4698-b204-1bac475c2c6e\"],\"03d5ea4cdbe83ece0fb9255a545fc00f\":[\"f55366b6-fd78-4b06-9ba1-0f8312453f3f\"],\"2d597ddb9dcb097166feebdf2c525bba\":[\"a8ab427d-94c9-4bfc-b06c-24d1d5bb217b\"]}",
            "contentItems": [
                {
                    "contentType": "content-item",
                    "contentId": "e7c01ef8-d51b-438b-b655-a5fc93530662",
                    "tcId": "3db52c65-f656-42ad-8f0a-c782a2c3ed85",
                    "contentFields": {
                        "Buttons": [
                            {
                                "Action": {
                                    "_type": "MotdVideoAction",
                                    "video": {
                                        "Autoplay": false,
                                        "StreamingEnabled": true,
                                        "UID": "PpUSDhsQiYSNrQKlVk",
                                        "VideoString": "Juno_Announce_Cine",
                                        "_type": "Video"
                                    }
                                },
                                "Style": "0",
                                "Text": "Watch Video",
                                "_type": "Button"
                            }
                        ],
                        "FullScreenBackground": {
                            "Image": [
                                {
                                    "width": 1920,
                                    "height": 1080,
                                    "url": "https://cdn-live.prm.ol.epicgames.com/prod/4f702810c2fc2d89cfcd5516c563a74acb0c9d41e4c228c59d8015eca61c49b3d764889158fd05f7b29fe7e7718f7051-213c730c-5de8-4d4b-bf28-c36cf6bd3f92.jpeg?width=1920"
                                },
                                {
                                    "width": 960,
                                    "height": 540,
                                    "url": "https://cdn-live.prm.ol.epicgames.com/prod/4f702810c2fc2d89cfcd5516c563a74acb0c9d41e4c228c59d8015eca61c49b3d764889158fd05f7b29fe7e7718f7051-213c730c-5de8-4d4b-bf28-c36cf6bd3f92.jpeg?width=960"
                                }
                            ],
                            "_type": "FullScreenBackground"
                        },
                        "FullScreenBody": "The adventure is building. Get ready for the vast, open worlds of LEGO Fortnite - a new survival crafting game launching on December 7!",
                        "FullScreenTabTitle": "N/A",
                        "FullScreenTitle": "LEGO Fortnite December 7",
                        "TeaserBackground": {
                            "Image": [
                                {
                                    "width": 1024,
                                    "height": 512,
                                    "url": "https://cdn-live.prm.ol.epicgames.com/prod/4f702810c2fc2d89cfcd5516c563a74a04c5d031ce7e06cf44e8ca85986731643e262407c3d9056ef4c6f7070b15049a-6d29328f-e8af-439c-851e-5756a5e5276d.jpeg?width=1024"
                                }
                            ],
                            "_type": "TeaserBackground"
                        },
                        "TeaserTitle": "LEGO Fortnite December 7"
                    },
                    "contentSchemaName": "DynamicMotd",
                    "contentHash": "303f130defae555b2621a189b09f3441"
                }
            ]
        })
    })
}

module.exports = misc;