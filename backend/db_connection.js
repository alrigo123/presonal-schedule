import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config()

// CONTAINER MYSQL DOKCER
// const pool = new createPool({
//     host: 'localhost',
//     port:  3333,
//     user : 'root',
//     password: 'cjmxc100',
//     database: 'schedule_todo'
// });

// MYSQL CLEVERCLOUD
const pool = new createPool({
    host: process.env.DB_HOST,
    port:  process.env.PORT,
    user : process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABSE
});

export default pool