require("dotenv").config();
const jwt = require("jsonwebtoken");

const errors = require("../responses/errors.json");
const createError = require("../utils/error");

async function verifyToken(request, reply) {
    try {
        const { authorization } = request.headers;

        if (!authorization) {
            return createError.createError(errors.NOT_ALLOWED.common, 403, reply);
        }
        const token = authorization.replace("bearer ", "").trim();
        const userToken = jwt.verify(token.replace("eg1~", ""), process.env.JWT_SECRET);

        request.user = userToken;
    } catch (err) {
        console.error(err);
        return createError.createError(errors.NOT_ALLOWED.common, 403, reply);
    }
}

module.exports = verifyToken;