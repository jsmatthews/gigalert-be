
const fs = require('fs');
var db = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

module.exports = { db }