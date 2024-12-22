require("dotenv").config();
const mongoose = require("mongoose");

async function connectMongo() {
    const uri = process.env.MONGODB;
    try {
        mongoose.connect(uri);
    } catch (err) {
        console.error(`Error Connecting To MongoDB: ${err}`);
    }
}

module.exports = connectMongo;