const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "nodes",
    password: "admin",
    port : 5432,
});

module.experts = pool; //untuk bisa dipake di tempat lain