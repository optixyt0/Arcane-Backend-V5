async function misc(fastify, options) {
    fastify.post('/v1/report', (request, reply) => {
        reply.status(200).send({
            "source": "talon",
            "encountered_report_error": false,
            "results": {
                "direct_small_get": {
                    "provider": "direct",
                    "successful": true,
                    "performance": {
                        "e2e": 1139
                    }
                },
                "cloudfront_small_get": {
                    "provider": "cloudfront",
                    "successful": true,
                    "performance": {
                        "e2e": 164
                    }
                },
                "fastly_small_get": {
                    "provider": "fastly",
                    "successful": true,
                    "performance": {
                        "e2e": 92
                    }
                },
                "akamai_small_get": {
                    "provider": "akamai",
                    "successful": true,
                    "performance": {
                        "e2e": 145
                    }
                },
                "cloudflare_small_get": {
                    "provider": "cloudflare",
                    "successful": true,
                    "performance": {
                        "e2e": 178
                    }
                }
            },
            "provider": "fastly"
        })
    })

    fastify.get('/v1/task', (request, reply) => {
        reply.status(200).send({
            "sub_tasks": [
                {
                    "task_id": "fastly_small_get",
                    "provider": "fastly",
                    "endpoint": "https://nelly-service-prod-fastly.ecosec.on.epicgames.com/v1/asset/fn_1k.jpeg"
                },
                {
                    "task_id": "cloudflare_small_get",
                    "provider": "cloudflare",
                    "endpoint": "https://nelly-service-prod-cloudflare.ecosec.on.epicgames.com/v1/asset/fn_1k.jpeg"
                },
                {
                    "task_id": "cloudfront_small_get",
                    "provider": "cloudfront",
                    "endpoint": "https://nelly-service-prod-cloudfront.ecosec.on.epicgames.com/v1/asset/fn_1k.jpeg"
                },
                {
                    "task_id": "direct_small_get",
                    "provider": "direct",
                    "endpoint": "https://nelly-service-prod.ecbc.live.use1a.on.epicgames.com/v1/asset/fn_1k.jpeg"
                },
                {
                    "task_id": "akamai_small_get",
                    "provider": "akamai",
                    "endpoint": "https://nelly-service-prod-akamai.ecosec.on.epicgames.com/v1/asset/fn_1k.jpeg"
                }
            ],
            "report_to": [
                {
                    "task_id": "",
                    "provider": "direct",
                    "endpoint": "https://nelly-service-prod.ecbc.live.use1a.on.epicgames.com/v1/report"
                },
                {
                    "task_id": "",
                    "provider": "fastly",
                    "endpoint": "https://nelly-service-prod-fastly.ecosec.on.epicgames.com/v1/report"
                },
                {
                    "task_id": "",
                    "provider": "cloudflare",
                    "endpoint": "https://nelly-service-prod-cloudflare.ecosec.on.epicgames.com/v1/report"
                },
                {
                    "task_id": "",
                    "provider": "akamai",
                    "endpoint": "https://nelly-service-prod-akamai.ecosec.on.epicgames.com/v1/report"
                },
                {
                    "task_id": "",
                    "provider": "cloudfront",
                    "endpoint": "https://nelly-service-prod-cloudfront.ecosec.on.epicgames.com/v1/report"
                }
            ]
        })
    })
}

module.exports = misc;