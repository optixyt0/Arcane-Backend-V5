async function misc(fastify, options) {
    fastify.get('/library/api/public/items', (request, reply) => {
        reply.status(200).send({
            "responseMetadata": {
                "nextCursor": "eyJvZmZzZXQiOjEwMH0=",
                "stateToken": "aa000214-01b3-460f-b971-a684b6588291"
            },
            "records": [
                {
                    "namespace": "fn",
                    "catalogItemId": "4fe75bbc5a674f4f9b356b5c90567da5",
                    "appName": "Fortnite",
                    "productId": "prod-fn",
                    "sandboxName": "Fortnite",
                    "sandboxType": "PUBLIC",
                    "recordType": "APPLICATION",
                    "acquisitionDate": "2018-08-21T17:09:17.522Z",
                    "dependencies": []
                }
            ]
        })
    })

    fastify.get('/library/api/public/stateToken/:stateToken/status', (request, reply) => {
        reply.status(200).send({
            "valid": true
        })
    })
}

module.exports = misc;