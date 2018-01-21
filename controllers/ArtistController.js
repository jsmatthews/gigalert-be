const { filter } = require('../helpers/filter');
const { db } = require('../db/db');

const queryArtists = (...args) => {
    const artists = db.artists;
    if (artists.length === 0) return []

    return filter(artists, args[1])
};

const addArtist = ({id, name, description}) => {
    console.log(id, name, description)
};

module.exports = { queryArtists, addArtist }