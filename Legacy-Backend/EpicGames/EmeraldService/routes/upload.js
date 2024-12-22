async function upload(fastify, options) {
    fastify.post('/emerald/v1/upload/init', (request, reply) => {
        reply.status(200).send({
            "token": "ArcaneV5",
            "files": {
                "recording.bin": {
                    "chunkUrls": [
                        ""
                    ]
                }
            }
        })
    })

    fastify.post('/emerald/v1/upload/complete', (request, reply) => {
        reply.status(204).send();
    })
}

module.exports = upload;