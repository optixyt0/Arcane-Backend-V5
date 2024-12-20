async function corrections(fastify, options) {
    // Cancel Pending Account Deletion Route
    fastify.put('/account/api/public/corrections/cancelPendingDeletion', (request, reply) => {
        reply.status(204).send();
    })

    // Date Of Birth Correction Route
    fastify.put('/account/api/public/corrections/dateOfBirth', (request, reply) => {
        reply.status(204).send();
    })

    // Displayname Correction Route
    fastify.put('/account/api/public/corrections/confirmDisplayName', (request, reply) => {
        reply.status(204).send();
    })

    // Guardian Email Correction Route
    fastify.put('/account/api/public/corrections/guardianEmail', (request, reply) => {
        reply.status(204).send();
    })

    // Promote Account Correction Route
    fastify.put('/account/api/public/corrections/promoteAccount', (request, reply) => {
        reply.status(204).send();
    })
}

module.exports = corrections;