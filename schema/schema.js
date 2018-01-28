const { db } = require('../db/db');
const { makeExecutableSchema } = require('graphql-tools')
const { queryUsers, signUpUser } = require('../controllers/UserController')
const { queryArtists, queryArtist, queryArtistEvents, addArtist } = require('../controllers/ArtistController')
const { queryEvents, queryEvent } = require('../controllers/EventController')

const { types: ArtistTypes, queries: ArtistQueries, mutations: ArtistMutations } = require('./Artist')
const { types: EventTypes, queries: EventQueries, mutations: EventMutations } = require('./Event')
const { types: UserTypes, queries: UserQueries, mutations: UserMutations } = require('./User')

// The GraphQL schema in string form
const typeDefs = `
    ${ArtistTypes}
    ${EventTypes}
    ${UserTypes}

    type Query {
        ${ArtistQueries}
        ${EventQueries}
        ${UserQueries}
    }

    type Mutation {
        ${ArtistMutations}
        ${EventMutations}
        ${UserMutations}
    }
`;

// The resolvers
const resolvers = {
    Query: {
        users: queryUsers,
        events: queryEvents,
        event: queryEvent,
        artists: queryArtists,
        artist: queryArtist,
    },
    Artist: {
        events: queryArtistEvents
    },
    Mutation: {
        signUpUser: signUpUser,
        addArtist: addArtist
    }
};

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    printErrors: true,
});

module.exports = { schema }