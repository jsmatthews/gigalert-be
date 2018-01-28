const { types: Artist } = require('./Artist')

const types = `
    type Event {
        id: Int
        title: String
        location: String
        artistId: Int
        date: String
    }
`;


const queries = `
    events(id: Int, title: String, location: String, artistId: Int, date: String): [Event]
    event(id: Int, title: String, location: String, artistId: Int, date: String): Event
`;

const mutations = `

`;

module.exports = { types, queries, mutations };