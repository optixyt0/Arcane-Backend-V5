async function worlds(fastify, options) {
    fastify.get('/api/v1/namespace/:namespaceId/worlds/accessibleTo/:accountId', (request, reply) => {
        reply.status(200).send([
            {
                "world": {
                    "namespaceId": "fn",
                    "worldId": "17abf5d94fd74b9383f4cf3a05bf2472",
                    "ownerAccountId": "94b1569506b04f9f8557af611e8c5e47",
                    "version": 0,
                    "currentVersion": 0,
                    "name": "3",
                    "customName": "finalyl",
                    "customNameChangeAllowedAt": "2024-08-31T10:10:15.70652891Z",
                    "createdAt": "2023-12-08T22:11:21.621143112Z",
                    "updatedAt": "2024-05-09T09:17:11.816934562Z",
                    "sanction": null,
                    "metadataConstraint": "juno_default",
                    "metadata": {
                        "mode": "Survival",
                        "friendlyCreatures": "On",
                        "hostileCreatures": "On",
                        "npcs": "Off",
                        "dropInventoryOnDeath": "Off",
                        "seed": 18937492,
                        "death": "On",
                        "temperature": "On",
                        "thumbnailTableRowName": "test",
                        "staminaDrain": "On",
                        "hunger": "On",
                        "devSettings": "[]"
                    },
                    "session": null,
                    "pendingActions": []
                },
                "grants": [],
                "session": null,
                "playermeta": null
            },
            {
                "world": {
                    "namespaceId": "fn",
                    "worldId": "52e1e576226c42ad9563503254f866c1",
                    "ownerAccountId": "94b1569506b04f9f8557af611e8c5e47",
                    "version": 0,
                    "currentVersion": 0,
                    "name": "5",
                    "customName": null,
                    "customNameChangeAllowedAt": null,
                    "createdAt": "2024-05-07T17:13:58.250022091Z",
                    "updatedAt": "2024-05-07T17:17:52.993752952Z",
                    "sanction": null,
                    "metadataConstraint": "nometadata",
                    "metadata": {},
                    "session": {
                        "owningSessionId": null,
                        "sessionKey": null,
                        "currentPlayers": null,
                        "sessionCreatedAt": null,
                        "lastServerHeartbeat": "2024-08-31T10:08:45.556731589Z",
                        "totalSecondsPlayed": 215
                    },
                    "pendingActions": []
                },
                "grants": [],
                "session": null,
                "playermeta": {
                    "namespaceId": "fn",
                    "worldId": "52e1e576226c42ad9563503254f866c1",
                    "accountId": "94b1569506b04f9f8557af611e8c5e47",
                    "totalSecondsPlayed": 61,
                    "lastPlayed": "2024-08-31T10:08:30.134Z",
                    "metadata": {}
                }
            }
        ])
    })

    fastify.get('/api/v1/namespace/:namespaceId/worlds/ownedBy/:accountId', (request, reply) => {
        reply.status(200).send([
            {
                "namespaceId": "fn",
                "worldId": "17abf5d94fd74b9383f4cf3a05bf2472",
                "ownerAccountId": "94b1569506b04f9f8557af611e8c5e47",
                "version": 0,
                "currentVersion": 0,
                "name": "3",
                "customName": "finalyl",
                "customNameChangeAllowedAt": "2024-08-31T10:10:15.70652891Z",
                "createdAt": "2023-12-08T22:11:21.621143112Z",
                "updatedAt": "2024-05-09T09:17:11.816934562Z",
                "sanction": null,
                "metadataConstraint": "juno_default",
                "metadata": {
                    "mode": "Survival",
                    "friendlyCreatures": "On",
                    "hostileCreatures": "On",
                    "npcs": "Off",
                    "dropInventoryOnDeath": "Off",
                    "seed": 18937492,
                    "death": "On",
                    "temperature": "On",
                    "thumbnailTableRowName": "test",
                    "staminaDrain": "On",
                    "hunger": "On",
                    "devSettings": "[]"
                },
                "session": null,
                "pendingActions": []
            },
            {
                "namespaceId": "fn",
                "worldId": "52e1e576226c42ad9563503254f866c1",
                "ownerAccountId": "94b1569506b04f9f8557af611e8c5e47",
                "version": 0,
                "currentVersion": 0,
                "name": "5",
                "customName": null,
                "customNameChangeAllowedAt": null,
                "createdAt": "2024-05-07T17:13:58.250022091Z",
                "updatedAt": "2024-05-07T17:17:52.993752952Z",
                "sanction": null,
                "metadataConstraint": "nometadata",
                "metadata": {},
                "session": {
                    "owningSessionId": null,
                    "sessionKey": null,
                    "currentPlayers": null,
                    "sessionCreatedAt": null,
                    "lastServerHeartbeat": "2024-08-31T10:08:45.556731589Z",
                    "totalSecondsPlayed": 215
                },
                "pendingActions": []
            }
        ])
    })

    fastify.post('/api/v1/namespace/:namespaceId/worlds/account/:accountId', (request, reply) => {
        reply.status(200).send({
            "namespaceId": "",
            "worldId": "77455b75-464a-8f68-60dc-0ea9327b2306",
            "ownerAccountId": "94b1569506b04f9f8557af611e8c5e47",
            "name": "",
            "customName": "ArcaneV5",
            "sanction": {
                "worldLocked": false,
                "worldOwnerFix": false,
                "multiplayerRestrictions": false,
                "checkpointId": "",
                "coordinates": ""
            },
            "version": 0,
            "metadataConstraint": "juno_default",
            "metadata": {
                "seed": 40928926,
                "mode": "Cozy",
                "hostileCreatures": "On",
                "friendlyCreatures": "On",
                "dropInventoryOnDeath": "Off",
                "hunger": "Off",
                "staminaDrain": "Off",
                "npcs": "On",
                "thumbnailTableRowName": "Night_01",
                "temperature": "Off",
                "death": "On",
                "friendlyFire": "Off",
                "powerSystem": "Off",
                "recruitedCreaturePermaDeath": "Off",
                "difficulty": "Easy",
                "eliteHostileCreatures": "Off",
                "flying": "Off"
            },
            "session": {
                "namespaceId": "",
                "worldId": "",
                "owningSessionId": "",
                "sessionKey": "",
                "currentPlayers": [],
                "totalSecondsPlayed": 0
            },
            "pendingActions": []
        })
    })
}

module.exports = worlds;