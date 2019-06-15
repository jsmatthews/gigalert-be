const { filter } = require('../helpers/filter');
const { db } = require('../db/db');

const queryEvents = (_, ...args) => {
    const events = db.events;
    if (events.length === 0) return []

    return filter(events, args)
};

const queryEvent = (_, args) => {
    const events = db.events;
    const eventId = args.id;
    if (events.length === 0) return {}

    return db.events.find(event => event.id === eventId)
}

module.exports = { queryEvents, queryEvent }