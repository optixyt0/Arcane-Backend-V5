async function hotconfig(fastify, options) {
    fastify.get('/hotconfigs/v2/:filename', (request, reply) => {
        reply.status(200).send({
            "HotConfigData": [
                {
                    "AppId": "livefn",
                    "EpicApp": "FortniteLivefn",
                    "Modules": []
                }
            ]
        })
    })
}

module.exports = hotconfig;