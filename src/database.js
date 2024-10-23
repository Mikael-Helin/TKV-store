const Database = require('better-sqlite3');
const db = new Database(process.env.DATABASE_PATH || './data/database.sqlite');
module.exports = db;