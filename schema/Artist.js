const {types: Event} = require('./Event')

const types = `
    type Artist {
        id: Int
        name: String
        description: String
        events: [Event]
    }
`;

const queries = `
    artists(id: Int, name: String, description: String): [Artist]
    artist(id: Int, name: String, description: String): Artist
`;

const mutations = `
    addArtist(id: Int, name: String, description: String): Artist
`;

module.exports = { types, queries, mutations };