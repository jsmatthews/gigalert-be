const types = `
    type Artist {
        id: Int
        name: String
        description: String
    }
`;

const queries = `
    artists(id: Int, name: String, description: String): [Artist]
`;

const mutations = `
    addArtist(id: Int, name: String, description: String): Artist
`;

module.exports = { types, queries, mutations };