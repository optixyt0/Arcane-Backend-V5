function createError(error, statusCode, reply) {
    reply.header('X-Epic-Error-Name', error.errorCode);
    reply.header('X-Epic-Error-Code', error.numericErrorCode);

    reply.status(statusCode).send(error);
}

module.exports = {
    createError
}