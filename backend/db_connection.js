import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config()

// CONTAINER MYSQL DOKCER
const pool = new createPool({
    host: process.env.DOCKER_DB_HOST,
    database: process.env.DOCKER_DB_NAME,
    user: process.env.DOCKER_DB_USER,
    password: process.env.DOCKER_DB_PASSWORD,
    port: process.env.DOCKER_DB_PORT
});

// MYSQL CLEVERCLOUD
// const pool = new createPool({
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
// });

export default pool