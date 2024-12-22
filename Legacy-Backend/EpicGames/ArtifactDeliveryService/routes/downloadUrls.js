async function downloadUrls(fastify, options) {
    fastify.post('/artifact-delivery/api/public/v1/delivery/account/:accountId/downloadurls', (request, reply) => {
        reply.status(200).send({})
    })
}

module.exports = downloadUrls;