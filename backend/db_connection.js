import { createPool } from "mysql2/promise";

const pool = new createPool({
    host: 'localhost',
    port:  3333,
    user : 'root',
    password: 'cjmxc100',
    database: 'schedule_todo'
});

export default pool