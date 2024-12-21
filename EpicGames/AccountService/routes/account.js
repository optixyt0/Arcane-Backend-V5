const User = require("../../../global/database/models/user");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const errors = require("../../../global/responses/errors.json");
const createError = require("../../../global/utils/error.js");

async function account(fastify, options) {
    // Category: Uncategorized
    fastify.get('/account/api/public/account/ageGate', (request, reply) => {
        reply.status(200).send({
            "ageGateRequired": true
        })
    })

    // Route for creating a user
    fastify.post('/account/api/public/account', async (request, reply) => {
        const { authenticate, tokenType, sendEmail } = request.query;
        const { name, lastName, preferredLanguage, displayName, phoneNumber, company, email, username, password, dateOfBirth } = request.body;
        if (!displayName || !email || !password) {
            return createError.createError(errors.BAD_REQUEST.common, 400, reply);
        }

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return createError.createError(errors.BAD_REQUEST.account.account_already_exists, 400, reply);
        }
        const hashedPass = await bcrypt.hash(password, 10);
        const accountId = uuidv4();

        const newUser = new User({
            accountInfo: {
                id: accountId,
                displayName: displayName,
                email: email,
                company: company ? company : displayName
            },
            security: {
                password: hashedPass
            }
        });
        await newUser.save();
        const user = await User.findOne({ 'accountInfo.id': accountId });
        reply.status(200).send({
            "accountInfo": user.accountInfo
        })
    })

    fastify.get('/account/api/accounts/:accountId/email', (request, reply) => {
        reply.status(204).send();
    })

    // Set Link Identity Type Route
    // idk the response
    fastify.post('/account/api/public/account/:accountId/linkIdentity', (request, reply) => {
        reply.status(204).send();
    })

    fastify.post('/account/api/public/account/:accountId/platformToken/:externalAuthType/:clientId', (request, reply) => {
        reply.status(200).send({
            "accessToken": "ep1~ArcaneV5",
            "expiresIn": 3598,
            "expiresAt": new Date(Date.now() + 3598 * 1000).toISOString()
        })
    })

    // idk the response
    fastify.post('/account/api/public/account/:accountId/resetDisplayName', (request, reply) => {
        reply.status(204).send();
    })

    // Send password reset Route
    fastify.post('/account/api/accounts/:accountId/resetPassword', (request, reply) => {
        reply.status(204).send();
    })

    // idk the response
    fastify.post('/account/api/public/account/:email/sendSingleUsePassword', (request, reply) => {
        reply.status(204).send();
    })

    fastify.put('/account/api/public/account/:accountId', (request, reply) => {
        reply.status(200).send({
            "accountInfo": {
                "id": "ArcaneV5",
                "displayName": "ArcaneV5",
                "email": "developer@arcane.dev",
                "failedLoginAttempts": 0,
                "lastLogin": "2023-05-02T16:51:59.221Z",
                "numberOfDisplayNameChanges": 1,
                "dateOfBirth": "2000-01-03",
                "ageGroup": "ADULT",
                "headless": false,
                "country": "EN-GB",
                "phoneNumber": "12345667890",
                "company": "Arcane Backend",
                "preferredLanguage": "en-gb",
                "lastDisplayNameChange": "2022-09-10T08:07:47.361Z",
                "canUpdateDisplayName": true,
                "tfaEnabled": true,
                "emailVerified": true,
                "minorVerified": false,
                "minorExpected": false,
                "minorStatus": "NOT_MINOR",
                "cabinedMode": false,
                "hasHashedEmail": false
            }
        })
    })

    fastify.post('/account/api/public/account/:accountId/validateCreds', (request, reply) => {
        reply.status(204).send();
    })

    // Category: DeviceAuth

    // Create Device Auth
    fastify.post('/account/api/public/account/:accountId/deviceAuth', (request, reply) => {
        reply.status(200).send({
            "deviceId": "435b52ece6d347479531c5132e209e53",
            "accountId": "ArcaneV5",
            "secret": "ArcaneV5",
            "userAgent": "",
            "created": {
                "location": "United Kingdom",
                "ipAddress": "127.0.0.1",
                "dateTime": new Date().toISOString()
            }
        })
    })

    // Delete Device Auth
    fastify.delete('/account/api/public/account/:accountId/deviceAuth/:deviceId', (request, reply) => {
        reply.status(204).send();
    })

    // Device Auth Info
    fastify.get('/account/api/public/account/:accountId/deviceAuth/:deviceId', (request, reply) => {
        reply.status(200).send({
            "deviceId": "06b96e4c93ce452590408e72f814dedf",
            "accountId": "ArcaneV5",
            "userAgent": "",
            "created": {
                "location": "United Kingdom",
                "ipAddress": "127.0.0.1",
                "dateTime": new Date().toISOString()
            },
            "lastAccess": {
                "location": "United Kingdom",
                "ipAddress": "127.0.0.1",
                "dateTime": new Date().toISOString()
            }
        })
    })

    fastify.get('/account/api/public/account/:accountId/deviceAuth', (request, reply) => {
        reply.status(200).send([
            {
                "deviceId": "06b96e4c93ce452590408e72f814dedf",
                "accountId": "ArcaneV5",
                "userAgent": "",
                "created": {
                    "location": "United Kingdom",
                    "ipAddress": "127.0.0.1",
                    "dateTime": new Date().toISOString()
                },
                "lastAccess": {
                    "location": "United Kingdom",
                    "ipAddress": "127.0.0.1",
                    "dateTime": new Date().toISOString()
                }
            }
        ])
    })

    // Category: ExternalAuth

    // Create External Auth Route
    fastify.post('/account/api/public/account/:accountId/externalAuths', (request, reply) => {
        reply.status(200).send({
            "accountId": "ArcaneV5",
            "type": "Arcane",
            "externalAuthId": "ArcaneV5",
            "externalAuthIdType": "arcane_login",
            "externalDisplayName": "Arcane",
            "authIds": [
                {
                    "id": "ArcaneV5",
                    "type": "arcane_login"
                }
            ],
            "dateAdded": new Date().toISOString()
        })
    })

    // Delete External Auth Route
    fastify.delete('/account/api/public/account/:accountId/externalAuths/:externalAuthType', (request, reply) => {
        reply.status(204).send();
    })

    // info
    fastify.get('/account/api/public/account/:accountId/externalAuths/:externalAuthType', (request, reply) => {
        reply.status(200).send({
            "accountId": "ArcaneV5",
            "type": "Arcane",
            "externalAuthId": "ArcaneV5",
            "externalAuthIdType": "arcane_login",
            "externalDisplayName": "Arcane",
            "authIds": [
                {
                    "id": "ArcaneV5",
                    "type": "arcane_login"
                }
            ],
            "dateAdded": new Date().toISOString()
        })
    })

    fastify.get('/account/api/public/account/:accountId/externalAuths', (request, reply) => {
        reply.status(200).send([])
    })

    // Category: Lookup

    // Lookup by External Display Name
    fastify.get('/account/api/public/account/lookup/externalAuth/:externalAuthType/displayName/:displayName', (request, reply) => {
        reply.status(200).send([
            {
                "id": "ArcaneV5",
                "displayName": "ArcaneV5",
                "links": {},
                "externalAuths": {}
            }
        ])
    })

    // Bulk Lookup by External Display Name
    fastify.post('/account/api/public/account/lookup/externalDisplayName', (request, reply) => {
        reply.status(200).send({
            "ArcaneV5": [
                {
                    "accountId": "ArcaneV5",
                    "type": "xbl",
                    "externalAuthIdType": "xuid",
                    "externalDisplayName": "ArcaneV5"
                }
            ]
        })
    })

    // Bulk lookup by external Id
    fastify.post('/account/api/public/account/lookup/externalId', (request, reply) => {
        reply.status(200).send({})
    })

    fastify.get('/account/api/public/account/:accountId', (request, reply) => {
        reply.status(200).send({
            "id": "ArcaneV5",
            "displayName": "ArcaneV5",
            "email": "developer@arcane.dev",
            "failedLoginAttempts": 0,
            "lastLogin": "2023-05-02T16:51:59.221Z",
            "numberOfDisplayNameChanges": 1,
            "dateOfBirth": "2000-01-03",
            "ageGroup": "ADULT",
            "headless": false,
            "country": "EN-GB",
            "phoneNumber": "12345667890",
            "company": "Arcane Backend",
            "preferredLanguage": "en-gb",
            "lastDisplayNameChange": "2022-09-10T08:07:47.361Z",
            "canUpdateDisplayName": true,
            "tfaEnabled": true,
            "emailVerified": true,
            "minorVerified": false,
            "minorExpected": false,
            "minorStatus": "NOT_MINOR",
            "cabinedMode": false,
            "hasHashedEmail": false
        })
    })

    // Lookup by account Ids 
    fastify.get('/account/api/public/account', (request, reply) => {
        reply.status(200).send([
            {
                "id": "ArcaneV5",
                "displayName": "ArcaneV5",
                "externalAuths": {}
            }
        ])
    })

    fastify.get('/account/api/public/account/displayName/:displayName', (request, reply) => {
        reply.status(200).send({
            "id": "ArcaneV5",
            "displayName": "ArcaneV5",
            "externalAuths": {}
        })
    })

    fastify.get('/account/api/public/account/email/:email', (request, reply) => {
        reply.status(200).send({
            "id": "ArcaneV5",
            "displayName": "ArcaneV5",
            "externalAuths": {}
        })
    })

    // Category: Metadata

    // Delete metadate key Route
    fastify.delete('/account/api/accounts/:accountId/metadata/:key', (request, reply) => {
        reply.status(204).send();
    })

    fastify.get('/account/api/accounts/:accountId/metadata', (request, reply) => {
        reply.status(200).send({})
    })

    // Get specific metadata key
    fastify.get('/account/api/accounts/:accountId/metadata/:key', (request, reply) => {
        reply.status(200).send();
    })

    // Set a metadate key
    fastify.post('/account/api/accounts/:accountId/metadata', (request, reply) => {
        reply.status(204).send();
    })
}

module.exports = account;