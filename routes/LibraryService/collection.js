async function collection(fastify, options) {
    fastify.post('/library/api/public/collection/:collectionId/item/account/:accountId/sandbox/:sandboxId/catalog/:catalogId/artifact/:artifactId', (request, reply) => {
        reply.status(200).send({
            "collectionId": "55d39f5c-2253-47da-9224-cf45daec27c2",
            "name": "ArcaneV5",
            "libraryItemContentVersion": 2
        })
    })

    fastify.get('/library/api/public/collection/:collectionId/item/account/:accountId', (request, reply) => {
        reply.status(200).send({
            "responseMetadata": {},
            "records": []
        })
    })

    fastify.delete('/library/api/public/collection/:collectionId/item/account/:accountId/sandbox/:sandboxId/catalog/:catalogId/artifact/:artifactId', (request, reply) => {
        reply.status(200).send({
            "collectionId": "55d39f5c-2253-47da-9224-cf45daec27c2",
            "name": "ArcaneV5",
            "libraryItemContentVersion": 3
        })
    })

    fastify.post('/library/api/public/collection/account/:accountId', (request, reply) => {
        reply.status(200).send({
            "collectionId": "55d39f5c-2253-47da-9224-cf45daec27c2",
            "name": "ArcaneV5",
            "libraryItemContentVersion": 1
        })
    })

    fastify.delete('/library/api/public/collection/:collectionId/account/:accountId', (request, reply) => {
        reply.status(204).send();
    })

    fastify.get('/library/api/public/collection/account/:accountId', (request, reply) => {
        reply.status(200).send({
            "collections": []
        })
    })

    fastify.put('/library/api/public/collection/account/:accountId', (request, reply) => {
        reply.status(200).send({
            "collectionId": "55d39f5c-2253-47da-9224-cf45daec27c2",
            "name": "ArcaneV5",
            "libraryItemContentVersion": 1
        })
    })
}

module.exports = collection;