const mysql = require('mysql2/promise');
let conn;

async function createConn() {
    conn = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'mentos1',
        password: '@M0VaoHnJk8bB0YT',
        database: 'sexywomen'
    });
    return conn;
}

function getConn() {
    return conn;
}

module.exports.createConn = createConn;
module.exports.getConn = getConn;
