const { filter } = require('../helpers/filter');
const { db } = require('../db/db');

const queryEvents = (...args) => {
    const events = db.events;
    if (events.length === 0) return []

    return filter(events, args[1])
};

module.exports = { queryEvents }