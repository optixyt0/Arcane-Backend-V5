async function user(fastify, options) {
    fastify.post('/links/api/:namespace/author/:accountId', (request, reply) => {
        reply.status(200).send({
            "namespace": "fn",
            "accountId": "",
            "creatorName": "",
            "mnemonic": "4247-4800-9493",
            "linkType": "valkyrie:application",
            "metadata": {},
            "version": 1,
            "active": true,
            "disabled": false,
            "created": "2023-03-29T20:11:00.102Z",
            "published": "2023-03-29T20:11:00.102Z",
            "descriptionTags": [],
            "moderationStatus": "Unmoderated",
            "lastActivatedDate": "2023-03-29T20:11:00.105Z",
            "discoveryIntent": "PUBLIC"
        })
    })

    fastify.post('/links/api/:namespace/author/:accountId/bulk', (request, reply) => {
        reply.status([
            {
                "namespace": "fn",
                "accountId": "",
                "creatorName": "",
                "mnemonic": "4247-4800-9493",
                "linkType": "valkyrie:application",
                "metadata": {},
                "version": 1,
                "active": true,
                "disabled": false,
                "created": "2023-03-29T20:11:00.102Z",
                "published": "2023-03-29T20:11:00.102Z",
                "descriptionTags": [],
                "moderationStatus": "Unmoderated",
                "lastActivatedDate": "2023-03-29T20:11:00.105Z",
                "discoveryIntent": "PUBLIC"
            }
        ])
    })

    fastify.get('/links/api/:namespace/author/:accountId', (request, reply) => {
        reply.status(200).send([
            {
                "namespace": "fn",
                "accountId": "",
                "creatorName": "",
                "mnemonic": "4247-4800-9493",
                "linkType": "valkyrie:application",
                "metadata": {},
                "version": 1,
                "active": true,
                "disabled": false,
                "created": "2023-03-29T20:11:00.102Z",
                "published": "2023-03-29T20:11:00.102Z",
                "descriptionTags": [],
                "moderationStatus": "Unmoderated",
                "lastActivatedDate": "2023-03-29T20:11:00.105Z",
                "discoveryIntent": "PUBLIC"
            }
        ])
    })
}

module.exports = user;