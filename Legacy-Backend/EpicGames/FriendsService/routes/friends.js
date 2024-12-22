async function friends(fastify, options) {
    // Catagory: Uncatagorized

    // AcceptBulk
    fastify.post('/friends/api/v1/:accountId/incoming/accept', (request, reply) => {
        reply.status(200).send([])
    })

    // Clear friends list
    fastify.delete('/friends/api/v1/:accountId/friends', (request, reply) => {
        reply.status(204).send();
    })

    // Friends List
    fastify.get('/friends/api/v1/:accountId/friends', (request, reply) => {
        reply.status(200).send([])
    })

    // Incoming friend requests
    fastify.get('/friends/api/v1/:accountId/incoming', (request, reply) => {
        reply.status(200).send([])
    })

    // Outgoing friend requests
    fastify.get('/friends/api/v1/:accountId/outgoing', (request, reply) => {
        reply.status(200).send([])
    })

    // Suggested Friends
    fastify.get('/friends/api/v1/:accountId/suggested', (request, reply) => {
        reply.status(200).send([])
    })

    // Summary
    fastify.get('/friends/api/v1/:accountId/summary', (request, reply) => {
        reply.status(200).send({
            "friends": [],
            "incoming": [],
            "outgoing": [],
            "suggested": [],
            "blocklist": [],
            "settings": {
                "acceptInvites": "public",
                "mutualPrivacy": "ALL"
            },
            "limitsReached": {
                "incoming": false,
                "outgoing": false,
                "accepted": false
            }
        })
    })

    // Catagory: Friend

    // Edit alias
    fastify.put('/friends/api/v1/:accountId/friends/:friendId/alias', (request, reply) => {
        reply.status(204).send();
    })

    // Remove alias
    fastify.delete('/friends/api/v1/:accountId/friends/:friendId/alias', (request, reply) => {
        reply.status(204).send();
    })

    // Set note
    fastify.put('/friends/api/v1/:accountId/friends/:friendId/note', (request, reply) => {
        reply.status(204).send();
    })

    // Remove note
    fastify.delete('/friends/api/v1/:accountId/friends/:friendId/note', (request, reply) => {
        reply.status(204).send();
    })

    // Add
    fastify.post('/friends/api/v1/:accountId/friends/:friendId', (request, reply) => {
        reply.status(204).send();
    })

    // Friendship info
    fastify.get('/friends/api/v1/:accountId/friends/:friendId', (request, reply) => {
        reply.status(200).send({
            "accountId": "ArcaneV5",
            "groups": [],
            "mutual": 92,
            "alias": "",
            "note": "",
            "favorite": false,
            "created": new Date().toISOString()
        })
    })

    // Mutual
    fastify.get('/friends/api/v1/:accountId/friends/:friendId/mutual', (request, reply) => {
        reply.status(200).send([])
    })

    // Decline Incoming / Cancel Outgoing / Remove Friend
    fastify.delete('/friends/api/v1/:accountId/friends/:friendId', (request, reply) => {
        reply.status(204).send();
    })

    // not really sure what the response should be, prolly not worth doing idk
    fastify.get('/friends/api/public/list/fortnite/:accountId/recentPlayers', (request, reply) => {
        reply.status(204).send();
    })
}

module.exports = friends;