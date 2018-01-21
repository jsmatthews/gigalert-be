const { makeExecutableSchema } = require('graphql-tools')
const { queryUsers, signUpUser } = require('../controllers/UserController')
const { queryArtists, addArtist } = require('../controllers/ArtistController')
const { queryEvents } = require('../controllers/EventController')

const { types: ArtistTypes, queries: ArtistQueries, mutations: ArtistMutations  } = require('./Artist')
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
        artists: queryArtists,
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