// src/libs/db.js
import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv';

dotenv.config({
    path: './.env.development'
});

let client;

function getClient() {
    if (!client) {
        client = new PrismaClient()
    }
    return client;
}

module.exports = getClient;