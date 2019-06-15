const { filter } = require('../helpers/filter');
const { db } = require('../db/db');

const queryArtists = (_, ...args) => {
    const artists = db.artists;
    if (artists.length === 0) return []

    return artists;
    // return filter(artists, args)
};

const queryArtist = (_, { id }) => db.artists.find(artist => artist.id === id);

const queryArtistEvents = ({ id }) => db.events.filter(event => event.artistId === id);

const addArtist = (_, { id, name, description }) => {
    console.log(id, name, description)
};

module.exports = { queryArtists, queryArtist, queryArtistEvents, addArtist }