const { filter } = require('../helpers/filter');
const { db } = require('../db/db');

const queryUsers = (...args) => {
    const users = db.users;
    if (users.length === 0) return []

    return filter(users, args[1])
};

module.exports = { queryUsers }