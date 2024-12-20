async function assets(fastify, options) {
    fastify.post('/api/v1/assets/:gameId/:branch/:changelist', (request, reply) => {
        reply.status(200).send({
            "FortCreativeDiscoverySurface": {
                "meta": {
                    "promotion": 23
                },
                "assets": {
                    "CreativeDiscoverySurface_Library": {
                        "meta": {
                            "revision": 2,
                            "headRevision": 2,
                            "revisedAt": "2023-04-26T15:02:18.478Z",
                            "promotion": 1,
                            "promotedAt": "2023-05-02T08:20:28.948Z"
                        },
                        "assetData": {
                            "AnalyticsId": "",
                            "TestCohorts": [
                                {
                                    "AnalyticsId": "",
                                    "CohortSelector": "Always",
                                    "PlatformBlacklist": [],
                                    "CountryCodeBlocklist": [],
                                    "ContentPanels": [],
                                    "PlatformWhitelist": [],
                                    "MMRegionBlocklist": [],
                                    "SelectionChance": "1.000000",
                                    "TestName": "LibraryTest",
                                    "CategoryRecommendationModelName": "",
                                    "CountryCodeAllowlist": [],
                                    "MMRegionAllowlist": []
                                }
                            ],
                            "GlobalLinkCodeBlacklist": ["playlist_unvaulted_squads"],
                            "SurfaceName": "CreativeDiscoverySurface_Library",
                            "TestName": "",
                            "primaryAssetId": "FortCreativeDiscoverySurface:CreativeDiscoverySurface_Library",
                            "GlobalLinkCodeWhitelist": []
                        }
                    }
                }
            }
        })
    })
}

module.exports = assets;