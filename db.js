const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

let db;

async function connectDB() {
    if (!db) {
        await client.connect();
        db = client.db("web2_courseproject");
        console.log("mongodb connection succseful");
    }
    return db;
}

module.exports = connectDB;
