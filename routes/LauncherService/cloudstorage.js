async function cloudstorage(fastify, options) {
    // Catagory: file
    fastify.get('/launcher/api/cloudstorage/system/:file', (request, reply) => {
        reply.status(200).send({
            "DataType": "SelDlMeta",
            "Builds": [
                {
                    "Namespace": "fn",
                    "Item": "4fe75bbc5a674f4f9b356b5c90567da5",
                    "Asset": "Fortnite",
                    "Version": "Regex(\\+\\+Fortnite\\+Release-(.*)-CL-(\\d+)-.*) && RegexGroupInt64(2) < 4016789 && ((RegexGroupString(1) == \"Prep\" && RegexGroupInt64(2) >= 3779789) || (RegexGroupString(1) == \"Next\" && RegexGroupInt64(2) >= 3779794) || (RegexGroupString(1) == \"Cert\" && RegexGroupInt64(2) >= 3785892) || (RegexGroupInt64(2) >= 3846604))"
                }
            ],
            "Data": []
        })
    })

    // delete a file
    fastify.delete('/launcher/api/cloudstorage/system/:file', (request, reply) => {
        reply.status(204).send();
    })

    // update contents
    fastify.put('/launcher/api/cloudstorage/system/:file', (request, reply) => {
        reply.status(204).send();
    })

    // Catagory: Uncatagorized

    // create a file
    fastify.post('/launcher/api/cloudstorage/system', (request, reply) => {
        reply.status(204).send();
    })

    // List files
    fastify.get('/launcher/api/cloudstorage/system', (request, reply) => {
        reply.status(200).send([])
    })
}

module.exports = cloudstorage;