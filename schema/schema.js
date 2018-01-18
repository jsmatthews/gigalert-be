const { makeExecutableSchema } = require('graphql-tools')
const { queryUsers } = require('../controllers/Users')
const { queryArtists } = require('../controllers/Artists')
const { queryEvents } = require('../controllers/Events')

// The GraphQL schema in string form
const typeDefs = `
    type Query {
      users(id: Int, name: String, email: String, password: String): [User]
      artists(id: Int, name: String, description: String): [Artist]
      events(id: Int, title: String, location: String, artistId: Int, date: String): [Event]
    }

    type User {id: Int, name: String, email: String, password: String}
    type Artist {id: Int, name: String, description: String}
    type Event {id: Int, title: String, location: String, artistId: Int, date: String}
`;

// The resolvers
const resolvers = {
    Query: {
        users: queryUsers,
        events: queryEvents,
        artists: queryArtists,
    }
};

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    printErrors: true,
});

module.exports = { schema }