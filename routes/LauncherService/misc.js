async function misc(fastify, options) {
    fastify.get('/launcher/api/public/distributionpoints', (request, reply) => {
        reply.status(200).send({
            "distributions": [
                "https://download.epicgames.com/",
                "https://download2.epicgames.com/",
                "https://download3.epicgames.com/",
                "https://download4.epicgames.com/",
                "https://epicgames-download1.akamaized.net/",
                "https://fastly-download.epicgames.com/"
            ]
        })
    })

    // idfk the respoonse
    fastify.get('/launcher/api/installer/download/:app', (request, reply) => {
        reply.status(204).send();
    })
}

module.exports = misc;