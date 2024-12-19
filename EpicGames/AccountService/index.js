const fastify = require('fastify')();
const formbody = require('@fastify/formbody');
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const errors = require("./responses/errors.json");
const createError = require("./utils/error.js");
const logger = require("./utils/logger.js");

const PORT = 8081;
const IP = "0.0.0.0";

fastify.register(formbody);

fs.readdirSync(path.join(__dirname, "routes")).forEach(fileName => {
    try {
        fastify.register(require(path.join(__dirname, "routes", fileName)));
    } catch (err) {
        console.error(`Error Registering Route: ${fileName}, Error: ` + err);
    }
});

fastify.setNotFoundHandler((request, reply) => {
    console.warn(`[${new Date().toISOString()}] 404 Not Found - ${request.method} ${request.url}`);
    console.warn('Headers:', request.headers);
    if (request.body) {
        console.warn('Body:', request.body);
    }
    else if (request.query) {
        console.warn('Query:', request.query);
    }
    createError.createError(errors.NOT_FOUND.common, 404, reply);
});

fastify.setErrorHandler((error, request, reply) => {
    if (reply.statusCode >= 400) {
        console.error(error);
    }
    createError.createError(errors.SERVER_ERROR.common, 500, reply);
});

async function connectMongo() {
    const uri = process.env.MONGODB + "/ArcaneV5_AccountService";
    try {
        mongoose.connect(uri);
        logger.backend(`Successfully connected to MongoDB: ${uri}`);
    } catch (err) {
        console.error(err);
    }
}

async function startBackend() {
    fastify.listen({ port: PORT, host: IP }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        logger.backend(`AccountService Running On ${address}`);
        connectMongo();
    });
}

startBackend();