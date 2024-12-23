const Profile = require("../../database/models/profile");

const functions = require("../../utils/functions");

async function mcp(fastify, options) {
    fastify.post('/fortnite/api/game/v2/profile/:accountId/client/QueryProfile', async (request, reply) => {
        const profiles = await Profile.findOne({ accountId: request.params.accountId });
        let profile = profiles.profiles[request.query.profileId];
        const memory = functions.GetVersionInfo(request);

        if (request.query.profileId == "athena") profile.stats.attributes.season_num = memory.season;

        if (profile.rvn == profile.commandRevision) {
            profile.rvn += 1;

            if (request.query.profileId == "athena") {
                if (!profile.stats.attributes.last_applied_loadout) profile.stats.attributes.last_applied_loadout = profile.stats.attributes.loadouts[0];
            }

            await profiles.updateOne({ $set: { [`profiles.${request.query.profileId}`]: profile } });
        }

        let MultiUpdate = [];
        let ApplyProfileChanges = [];
        let BaseRevision = profile.rvn;
        let ProfileRevisionCheck = (memory.build >= 12.20) ? profile.commandRevision : profile.rvn;
        let QueryRevision = request.query.rvn || -1;

        if ((request.query.profileId == "common_core")) {
            let athena = profiles.profiles["athena"];
            MultiUpdate = [{
                "profileRevision": athena.rvn || 0,
                "profileId": "athena",
                "profileChangesBaseRevision": athena.rvn || 0,
                "profileChanges": [{
                    "changeType": "fullProfileUpdate",
                    "profile": athena
                }],
                "profileCommandRevision": athena.commandRevision || 0,
            }];
        }

        if (QueryRevision != ProfileRevisionCheck) {
            ApplyProfileChanges = [{
                "changeType": "fullProfileUpdate",
                "profile": profile
            }];
        }

        reply.status(200).send({
            profileRevision: profile.rvn || 0,
            profileId: request.query.profileId,
            profileChangesBaseRevision: BaseRevision,
            profileChanges: ApplyProfileChanges,
            profileCommandRevision: profile.commandRevision || 0,
            serverTime: new Date().toISOString(),
            multiUpdate: MultiUpdate,
            responseVersion: 1
        });
    })

    // idk how to do this
    fastify.post('/fortnite/api/game/v2/profile/:accountId/client/RefreshExpeditions', async (request, reply) => {
        const profiles = await Profile.findOne({ accountId: request.params.accountId });
        let profile = profiles.profiles[request.query.profileId];
        const memory = functions.GetVersionInfo(request);

        let MultiUpdate = [];
        let ApplyProfileChanges = [];
        let BaseRevision = profile.rvn;
        let ProfileRevisionCheck = (memory.build >= 12.20) ? profile.commandRevision : profile.rvn;
        let QueryRevision = request.query.rvn || -1;

        if (QueryRevision != ProfileRevisionCheck) {
            ApplyProfileChanges = [{
                "changeType": "fullProfileUpdate",
                "profile": profile
            }];
        }

        reply.status(200).send({
            profileRevision: profile.rvn || 0,
            profileId: request.query.profileId,
            profileChangesBaseRevision: BaseRevision,
            profileChanges: ApplyProfileChanges,
            profileCommandRevision: profile.commandRevision || 0,
            serverTime: new Date().toISOString(),
            multiUpdate: MultiUpdate,
            responseVersion: 1
        });
    })

    fastify.post('/fortnite/api/game/v2/profile/:accountId/client/:operation', async (request, reply) => {
        const { operation } = request.params;
        console.warn(`Missing/Unsupported MCP Operation: ${operation}`);
        console.warn(request.body);
        console.warn(request.query);

        const profiles = await Profile.findOne({ accountId: request.params.accountId });
        let profile = profiles.profiles[request.query.profileId];
        const memory = functions.GetVersionInfo(request);

        if (request.query.profileId == "athena") profile.stats.attributes.season_num = memory.season;

        if (profile.rvn == profile.commandRevision) {
            profile.rvn += 1;

            if (request.query.profileId == "athena") {
                if (!profile.stats.attributes.last_applied_loadout) profile.stats.attributes.last_applied_loadout = profile.stats.attributes.loadouts[0];
            }

            await profiles.updateOne({ $set: { [`profiles.${request.query.profileId}`]: profile } });
        }

        let MultiUpdate = [];
        let ApplyProfileChanges = [];
        let BaseRevision = profile.rvn;
        let ProfileRevisionCheck = (memory.build >= 12.20) ? profile.commandRevision : profile.rvn;
        let QueryRevision = request.query.rvn || -1;

        if ((request.query.profileId == "common_core")) {
            let athena = profiles.profiles["athena"];
            MultiUpdate = [{
                "profileRevision": athena.rvn || 0,
                "profileId": "athena",
                "profileChangesBaseRevision": athena.rvn || 0,
                "profileChanges": [{
                    "changeType": "fullProfileUpdate",
                    "profile": athena
                }],
                "profileCommandRevision": athena.commandRevision || 0,
            }];
        }

        if (QueryRevision != ProfileRevisionCheck) {
            ApplyProfileChanges = [{
                "changeType": "fullProfileUpdate",
                "profile": profile
            }];
        }

        reply.status(200).send({
            profileRevision: profile.rvn || 0,
            profileId: request.query.profileId,
            profileChangesBaseRevision: BaseRevision,
            profileChanges: ApplyProfileChanges,
            profileCommandRevision: profile.commandRevision || 0,
            serverTime: new Date().toISOString(),
            multiUpdate: MultiUpdate,
            responseVersion: 1
        });
    })
}

module.exports = mcp;