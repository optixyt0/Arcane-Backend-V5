const functions = require("../utils/functions");

async function calender(fastify, options) {
    fastify.get('/fortnite/api/calendar/v1/timeline', (request, reply) => {
        const memory = functions.GetVersionInfo(request);
        reply.status(200).send({
            "channels": {
                "standalone-store": {
                    "states": [
                        {
                            "validFrom": "2023-05-18T22:05:32.216Z",
                            "activeEvents": [],
                            "state": {
                                "activePurchaseLimitingEventIds": [],
                                "storefront": {},
                                "rmtPromotionConfig": [],
                                "storeEnd": "0001-01-01T00:00:00.000Z"
                            }
                        }
                    ],
                    "cacheExpire": "9998-05-19T00:05:32.216Z"
                },
                "client-matchmaking": {
                    "states": [
                        {
                            "validFrom": "2023-05-18T22:05:32.216Z",
                            "activeEvents": [],
                            "state": {
                                "region": {
                                    "OCE": {
                                        "eventFlagsForcedOff": ["Playlist_DefaultDuo"]
                                    },
                                    "CN": {
                                        "eventFlagsForcedOff": [
                                            "Playlist_DefaultDuo",
                                            "Playlist_Bots_DefaultDuo",
                                            "Playlist_Deimos_DuoCN"
                                        ]
                                    },
                                    "REGIONID": {
                                        "eventFlagsForcedOff": ["Playlist_Deimos_Duo_WinterCN"]
                                    },
                                    "ASIA": {
                                        "eventFlagsForcedOff": ["Playlist_DefaultDuo"]
                                    }
                                }
                            }
                        }
                    ],
                    "cacheExpire": "9998-05-19T00:05:32.216Z"
                },
                "tk": {
                    "states": [
                        {
                            "validFrom": "2023-05-18T22:05:32.216Z",
                            "activeEvents": [],
                            "state": {
                                "k": [
                                    "B3D2793477E5D467475BE403774360E5:HNj5inGk1/2h9f0r4+SGPPY9t69eOwS6w0XGxpTVOTM="
                                ]
                            }
                        }
                    ],
                    "cacheExpire": "9998-05-19T00:05:32.216Z"
                },
                "featured-islands": {
                    "states": [
                        {
                            "validFrom": "2023-05-18T22:05:32.216Z",
                            "activeEvents": [],
                            "state": {
                                "islandCodes": [],
                                "playlistCuratedContent": {},
                                "playlistCuratedHub": {
                                    "Playlist_PlaygroundV2": "4707-3216-0421",
                                    "Playlist_Creative_PlayOnly": "4707-3216-0421"
                                },
                                "islandTemplates": []
                            }
                        }
                    ],
                    "cacheExpire": "9998-05-19T00:05:32.216Z"
                },
                "community-votes": {
                    "states": [
                        {
                            "validFrom": "2023-05-18T22:05:32.216Z",
                            "activeEvents": [],
                            "state": {
                                "electionId": "",
                                "candidates": [],
                                "electionEnds": "9999-12-31T23:59:59.999Z",
                                "numWinners": 1
                            }
                        }
                    ],
                    "cacheExpire": "9998-05-19T00:05:32.216Z"
                },
                "client-events": {
                    "states": [
                        {
                            "validFrom": "2023-05-18T22:05:32.216Z",
                            "activeEvents": [
                                {
                                    "eventType": `EventFlag.Season${memory.season}`,
                                    "activeUntil": "9999-01-01T00:00:00.000Z",
                                    "activeSince": "2020-01-01T00:00:00.000Z"
                                },
                                {
                                    "eventType": `EventFlag.${memory.lobby}`,
                                    "activeUntil": "9999-01-01T00:00:00.000Z",
                                    "activeSince": "2020-01-01T00:00:00.000Z"
                                }
                            ],
                            "state": {
                                "activeStorefronts": [],
                                "eventNamedWeights": {},
                                "activeEvents": [
                                    {
                                        "eventType": `EventFlag.Season${memory.season}`,
                                        "activeUntil": "9999-01-01T00:00:00.000Z",
                                        "activeSince": "2020-01-01T00:00:00.000Z"
                                    },
                                    {
                                        "eventType": `EventFlag.${memory.lobby}`,
                                        "activeUntil": "9999-01-01T00:00:00.000Z",
                                        "activeSince": "2020-01-01T00:00:00.000Z"
                                    }
                                ],
                                "seasonNumber": memory.season,
                                "seasonTemplateId": `AthenaSeason:athenaseason${memory.season}`,
                                "matchXpBonusPoints": 0,
                                "eventPunchCardTemplateId": "",
                                "seasonBegin": "2023-03-09T13:00:00Z",
                                "seasonEnd": "9998-05-19T00:05:32.216Z",
                                "seasonDisplayedEnd": "9998-05-19T00:05:32.216Z",
                                "weeklyStoreEnd": "9998-05-19T00:05:32.216Z",
                                "stwEventStoreEnd": "9998-05-19T00:05:32.216Z",
                                "stwWeeklyStoreEnd": "9998-05-19T00:05:32.216Z",
                                "sectionStoreEnds": {
                                    "Daily": "9998-05-19T00:05:32.216Z",
                                    "Featured": "9998-05-19T00:05:32.216Z"
                                },
                                "rmtPromotion": "",
                                "dailyStoreEnd": "9998-05-19T00:05:32.216Z"
                            }
                        }
                    ],
                    "cacheExpire": "9998-05-19T00:05:32.216Z"
                }
            },
            "cacheIntervalMins": 15,
            "currentTime": new Date().toISOString()
        })
    })
}

module.exports = calender;