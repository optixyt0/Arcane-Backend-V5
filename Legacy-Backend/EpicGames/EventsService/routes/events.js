async function events(fastify, options) {
    // Catagory: Uncatagorized
    fastify.get('/api/v1/leaderboards/:gameId/:eventId/:eventWindowId/:accountId', (request, reply) => {
        reply.status(200).send({
            "gameId": "Fortnite",
            "eventId": "epicgames_S24_DuosCashCup_EU",
            "eventWindowId": "S24_DuosCashCup_EU_Event1_Round1",
            "page": 0,
            "totalPages": 0,
            "updatedTime": "2023-05-30T19:13:27.317Z",
            "entries": [],
            "liveSessions": {}
        })
    })

    // Catagory: Data
    fastify.get('/api/v1/events/:gameId/data/:accountId', (request, reply) => {
        reply.status(200).send({
            "player": {
                "gameId": "Fortnite",
                "accountId": request.params.accountId,
                "tokens": [
                    "Arena_S24_Division1"
                ],
                "teams": {},
                "pendingPayouts": [],
                "pendingPenalties": {},
                "persistentScores": {
                    "Hype_S24_P": 0
                },
                "groupIdentity": {
                    "GeoIdentity": "United Kingdom"
                }
            },
            "events": [],
            "templates": [],
            "leaderboardDefs": [],
            "scoringRuleSets": {},
            "payoutTables": {},
            "scores": [],
            "resolvedWindowLocations": {}
        })
    })

    fastify.get('/api/v1/events/:gameId/download/:accountId', (request, reply) => {
        reply.status(200).send({
            "events": [
                {
                    "gameId": "Fortnite",
                    "eventId": "epicgames_S25_DuosFillQuickCup_EU",
                    "regions": ["EU"],
                    "regionMappings": {},
                    "platforms": ["PS4", "XboxOne", "XSX", "Android", "PS5", "Windows"],
                    "platformMappings": {},
                    "displayDataId": "s25_fill_duosbr",
                    "eventGroup": "Season25DuosFillQuickCup",
                    "announcementTime": "2023-06-09T15:00:00.000Z",
                    "appId": null,
                    "environment": null,
                    "link": {
                        "type": "br:tournament",
                        "code": "tournament_epicgames_s25_duosfillquickcup_eu",
                        "version": 1
                    },
                    "metadata": {
                        "TeamLockType": "Window",
                        "minimumAccountLevel": 15,
                        "TrackedStats": ["MMO_RadioTower", "MMO_LootIsland"],
                        "DisqualifyType": "Event",
                        "RegionLockType": "None",
                        "AccountLockType": "Window"
                    },
                    "eventWindows": [],
                    "beginTime": "2023-06-15T17:00:00.000Z",
                    "endTime": "2023-10-18T20:00:00.000Z"
                }
            ],
            "templates": [],
            "leaderboardDefs": [],
            "scoringRuleSets": {},
            "payoutTables": {},
            "resolvedWindowLocations": {}
        })
    })

    // Catagory: History
    fastify.post('/api/v1/events/:gameId/:eventId/:eventWindowId/history', (request, reply) => {
        reply.status(200).send({
            "PLACEMENT_STAT_INDEX": 1,
            "TIME_ALIVE_STAT": 0,
            "TEAM_ELIMS_STAT_INDEX": 0,
            "PLACEMENT_TIEBREAKER_STAT": 1,
            "VICTORY_ROYALE_STAT": 0
        })
    })

    fastify.get('/api/v1/events/:gameId/:eventId/history/:accountId', (request, reply) => {
        reply.status(200).send([
            {
                "scoreKey": {
                    "gameId": "Fortnite",
                    "eventId": "epicgames_S24_DuosCashCup_EU",
                    "eventWindowId": "S24_DuosCashCup_EU_Event1_Round1",
                    "_scoreId": null
                },
                "teamId": request.params.accountId,
                "teamAccountIds": [request.params.accountId],
                "liveSessionId": null,
                "pointsEarned": 0,
                "score": 0,
                "rank": 1,
                "percentile": 0.00,
                "pointBreakdown": {},
                "sessionHistory": [],
                "unscoredSessions": []
            }
        ])
    })

    fastify.get('/api/v1/events/:gameId/:eventId/:eventWindowId/history/:accountId', (request, reply) => {
        reply.status(200).send([
            {
                "scoreKey": {
                    "gameId": "Fortnite",
                    "eventId": "epicgames_S24_DuosCashCup_EU",
                    "eventWindowId": "S24_DuosCashCup_EU_Event1_Round1",
                    "_scoreId": null
                },
                "teamId": request.params.accountId,
                "teamAccountIds": [request.params.accountId],
                "liveSessionId": null,
                "pointsEarned": 0,
                "score": 0,
                "rank": 1,
                "percentile": 0.00,
                "pointBreakdown": {
                    "PLACEMENT_STAT_INDEX:14": {
                        "timesAchieved": 0,
                        "pointsEarned": 0
                    }
                },
                "sessionHistory": [],
                "unscoredSessions": []
            }
        ])
    })
}

module.exports = events;