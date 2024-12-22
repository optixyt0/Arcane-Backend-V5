async function discovery(fastify, options) {
    // Catagory: Uncatagorized

    // idk the response
    fastify.get('/api/v1/discovery/hub/portals', (request, reply) => {
        reply.status(204).send();
    })

    // Catagory: V1
    fastify.post('/api/v1/discovery/surface/:accountId', (request, reply) => {
        reply.status(200).send({
            "panels": [
                {
                    "panelName": "RecentlyPlayed",
                    "pages": [
                        {
                            "results": [],
                            "hasMore": false
                        }
                    ]
                },
                {
                    "panelName": "Favorites",
                    "pages": [
                        {
                            "results": [],
                            "hasMore": false
                        }
                    ]
                }
            ],
            "testCohorts": ["librarytest"]
        })
    })

    fastify.post('/api/v1/discovery/surface/page/:accountId', (request, reply) => {
        reply.status(200).send({
            "results": [],
            "hasMore": false
        })
    })

    // Catagory: V2
    fastify.post('/api/v2/discovery/surface/:surfaceName', (request, reply) => {
        reply.status(200).send({
            "testVariantName": "Baseline",
            "testName": "31.30_31.40_EpicPage",
            "testAnalyticsId": "v2|5117|1cf3c6c8329b7f8040f39fec1712d1dd",
            "testVariantAnalyticsId": "v2_v0_c7790",
            "panels": [
                {
                    "panelName": "Featured_EpicPage",
                    "panelDisplayName": "Featured",
                    "panelSubtitle": null,
                    "featureTags": [
                        "hasViewAll:true",
                        "horizontalScroll:false",
                        "maxVisibleRows:2",
                        "panelType:featured",
                        "showIfEmpty:false",
                        "squareTiles:false"
                    ],
                    "firstPage": {
                        "results": [],
                        "hasMore": false,
                        "panelTargetName": null,
                        "pageMarker": null
                    },
                    "panelType": "CuratedList",
                    "playHistoryType": null,
                    "panelContexts": {}
                },
                {
                    "panelName": "PublishedIslands",
                    "panelDisplayName": "More Islands",
                    "panelSubtitle": null,
                    "featureTags": [
                        "hasViewAll:true",
                        "horizontalScroll:false",
                        "maxVisibleRows:2",
                        "panelType:published",
                        "showIfEmpty:false",
                        "squareTiles:false"
                    ],
                    "firstPage": {
                        "results": [],
                        "hasMore": false,
                        "panelTargetName": null,
                        "pageMarker": null
                    },
                    "panelType": "PublishedIslands",
                    "playHistoryType": null,
                    "panelContexts": {}
                }
            ]
        })
    })

    fastify.post('/api/v2/discovery/surface/:surfaceName/page', (request, reply) => {
        reply.status(200).send({
            "results": [],
            "hasMore": false,
            "panelTargetName": null,
            "pageMarker": null
        })
    })
}

module.exports = discovery;