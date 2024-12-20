const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const errors = require("../responses/errors.json");
const createError = require("../utils/error");

async function cloudstorage(fastify, options) {
    fastify.post('/fortnite/api/cloudstorage/system', (request, reply) => {
        reply.status(204).send();
    })

    fastify.get("/fortnite/api/cloudstorage/system", async (request, reply) => {
        try {
            const dir = path.join(__dirname, "..", "responses", "CloudStorage");

            let CloudFiles = [];

            fs.readdirSync(dir).forEach(name => {
                if (name.toLowerCase().endsWith(".ini")) {
                    const ParsedFile = fs.readFileSync(path.join(dir, name)).toString();
                    const ParsedStats = fs.statSync(path.join(dir, name));

                    CloudFiles.push({
                        "uniqueFilename": name,
                        "filename": name,
                        "hash": crypto.createHash('sha1').update(ParsedFile).digest('hex'),
                        "hash256": crypto.createHash('sha256').update(ParsedFile).digest('hex'),
                        "length": ParsedFile.length,
                        "contentType": "application/octet-stream",
                        "uploaded": ParsedStats.mtime,
                        "storageType": "S3",
                        "storageIds": {},
                        "doNotCache": true
                    });
                }
            });
            reply.status(200).send(CloudFiles);
        } catch (err) {
            console.error(err);
            createError.createError(errors.SERVER_ERROR.common, 500, reply);
        }
    });

    fastify.get("/fortnite/api/cloudstorage/system/:file", (request, reply) => {
        if (request.params.file == "config") {
            return reply.status(200).send(require("../responses/CloudStorage/config.json"));
        }
        const file = path.join(__dirname, "..", "responses", "CloudStorage", path.basename(request.params.file));

        if (fs.existsSync(file)) return reply.status(200).send(fs.readFileSync(file));

        reply.status(200);
    });

    fastify.get('/fortnite/api/cloudstorage/system/:file/links', (request, reply) => {
        reply.status(200).send({
            "readLink": "",
            "writeLink": ""
        })
    })

    fastify.put("/fortnite/api/cloudstorage/system/:file", (request, reply) => {
        reply.status(204).send();
    });

    fastify.delete("/fortnite/api/cloudstorage/system/:file", (request, reply) => {
        reply.status(204).send();
    });

    fastify.get('/fortnite/api/cloudstorage/user/config', (request, reply) => {
        const config = require("../responses/CloudStorage/config.json");
        config.enumerateFilesPath = "/api/cloudstorage/user";
        reply.status(200).send(config);
    })

    fastify.post('/fortnite/api/cloudstorage/user/:accountId', (request, reply) => {
        reply.status(200).send([]);
    })

    fastify.get('/fortnite/api/cloudstorage/user/:accountId', (request, reply) => {
        reply.status(200).send([]);
    })

    fastify.get('/fortnite/api/cloudstorage/user/:accountId/:uniqueFilename/links', (request, reply) => {
        reply.status(200).send({
            "readLink": "",
            "writeLink": ""
        })
    })

    fastify.put('/fortnite/api/cloudstorage/user/:accountId/:file', (request, reply) => {
        reply.status(200).send();
    })

    fastify.delete('/fortnite/api/cloudstorage/user/:accountId/:file', (request, reply) => {
        reply.status(200).send();
    })

    fastify.get('/fortnite/api/cloudstorage/storage/:accountId/info', (request, reply) => {
        reply.status(200).send({
            "accountId": request.params.accountId,
            "totalStorage": 9223372036854775807,
            "totalUsed": 0
        })
    })
}

module.exports = cloudstorage;