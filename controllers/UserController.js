const { filter } = require('../helpers/filter');
const fs = require('fs')
const { db } = require('../db/db');

const queryUsers = (...args) => {
    const users = db.users;
    if (users.length === 0) return []

    return filter(users, args[1])
};

const signUpUser = (_, {email, password}) => {
    const newUser = Object.assign({}, {id: db.users.length + 1, email, password})
    db.users.push(newUser)
    const dbString = JSON.stringify(db)
    let writeError = fs.writeFileSync('./db/db.json', dbString)
    return newUser;
}

module.exports = { queryUsers, signUpUser }