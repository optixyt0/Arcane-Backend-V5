const User = require("../../../global/database/models/user");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const errors = require("../../../global/responses/errors.json");
const createError = require("../../../global/utils/error.js");

async function oauth(fastify, options) {
    fastify.post('/account/api/oauth/token', (request, reply) => {
        const { grant_type } = request.body;
        if (grant_type == "password") {
            const { username, password } = request.body;
            reply.status(200).send({
                "access_token": "eg1~ArcaneV5",
                "expires_in": 7200,
                "expires_at": new Date(Date.now() + 7200 * 1000).toISOString(),
                "token_type": "bearer",
                "refresh_token": "eg1~ArcaneV5",
                "refresh_expires": 28800,
                "refresh_expires_at": new Date(Date.now() + 28800 * 1000).toISOString(),
                "account_id": "ArcaneV5",
                "client_id": "ec684b8c687f479fadea3cb2ad83f5c6",
                "internal_client": true,
                "client_service": "fortnite",
                "displayName": "ArcaneV5",
                "app": "fortnite",
                "in_app_id": "ArcaneV5",
                "device_id": uuidv4()
            })
        } else if (grant_type == "client_credentials") {
            reply.status(200).send({
                "access_token": "eg1~ArcaneV5",
                "expires_in": 14400,
                "expires_at": new Date(Date.now() + 14400 * 1000).toISOString(),
                "token_type": "bearer",
                "client_id": "ec684b8c687f479fadea3cb2ad83f5c6",
                "internal_client": true,
                "client_service": "prod-fn",
                "product_id": "prod-fn",
                "application_id": "fghi4567FNFBKFz3E4TROb0bmPS8h1GW"
            })
        } else if (grant_type == "exchange_code") {
            reply.status(200).send({
                "access_token": "eg1~ArcaneV5",
                "expires_in": 7200,
                "expires_at": new Date(Date.now() + 7200 * 1000).toISOString(),
                "token_type": "bearer",
                "refresh_token": "eg1~ArcaneV5",
                "refresh_expires": 28800,
                "refresh_expires_at": new Date(Date.now() + 28800 * 1000).toISOString(),
                "account_id": "ArcaneV5",
                "client_id": "ec684b8c687f479fadea3cb2ad83f5c6",
                "internal_client": true,
                "client_service": "prod-fn",
                "displayName": "ArcaneV5",
                "app": "prod-fn",
                "in_app_id": "ArcaneV5",
                "product_id": "prod-fn",
                "application_id": "fghi4567FNFBKFz3E4TROb0bmPS8h1GW"
            })
        }
    })

    fastify.get('/account/api/oauth/verify', (request, reply) => {
        const { includePerms } = request.query;
        const perms = [
            {
                "resource": "launcher:download:live",
                "action": 2
            },
            {
                "resource": "catalog:shared:*",
                "action": 2
            }
        ]

        if (!includePerms || includePerms == false) {
            reply.status(200).send({
                "token": "eg1~ArcaneV5",
                "session_id": "ArcaneV5",
                "token_type": "bearer",
                "client_id": "ec684b8c687f479fadea3cb2ad83f5c6",
                "internal_client": true,
                "client_service": "launcher",
                "account_id": "ArcaneV5",
                "expires_in": 16462,
                "expires_at": new Date(Date.now() + 16462 * 1000).toISOString(),
                "auth_method": "exchange_code",
                "display_name": "ArcaneV5",
                "app": "launcher",
                "in_app_id": "ArcaneV5"
            })
        } else {
            reply.status(200).send({
                "token": "eg1~ArcaneV5",
                "session_id": "ArcaneV5",
                "token_type": "bearer",
                "client_id": "ec684b8c687f479fadea3cb2ad83f5c6",
                "internal_client": true,
                "client_service": "launcher",
                "account_id": "ArcaneV5",
                "expires_in": 16462,
                "expires_at": new Date(Date.now() + 16462 * 1000).toISOString(),
                "auth_method": "exchange_code",
                "display_name": "ArcaneV5",
                "app": "launcher",
                "in_app_id": "ArcaneV5",
                "perms": perms
            })
        }
    })

    // Create an exchange route
    fastify.get('/account/api/oauth/exchange', (request, reply) => {
        reply.status(200).send({
            "expiresInSeconds": 299,
            "code": "ArcaneV5",
            "creatingClientId": "ec684b8c687f479fadea3cb2ad83f5c6"
        })
    })

    // Create a device code route
    fastify.post('/account/api/oauth/deviceAuthorization', (request, reply) => {
        reply.status(200).send({
            "user_code": "ArcaneV5",
            "device_code": "ArcaneV5",
            "verification_uri": "https://www.epicgames.com/activate",
            "verification_uri_complete": "https://www.epicgames.com/activate?userCode=ArcaneV5",
            "prompt": "login",
            "expires_in": 600,
            "interval": 10,
            "client_id": "ec684b8c687f479fadea3cb2ad83f5c6"
        })
    })

    fastify.delete('/account/api/oauth/deviceAuthorization/:userCode', (request, reply) => {
        reply.status(204).send();
    })

    // Continuation Token Route, idk what the response should look like
    fastify.get('/account/api/oauth/continuationToken/:continuationToken', (request, reply) => {
        reply.status(204).send();
    })

    fastify.get('/account/api/oauth/permissions', (request, reply) => {
        reply.status(200).send([
            {
                "resource": "launcher:download:live",
                "action": 2
            },
            {
                "resource": "catalog:shared:*",
                "action": 2
            }
        ])
    })

    fastify.delete('/account/api/oauth/sessions/kill/:session', (request, reply) => {
        reply.status(204).send();
    })

    fastify.delete('/account/api/oauth/sessions/kill', (request, reply) => {
        reply.status(204).send();
    })
}

module.exports = oauth;