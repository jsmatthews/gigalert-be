const types = `
    type User {
        id: Int
        name: String
        email: String
        password: String
    }
`;

const queries = `
    users(id: Int, name: String, email: String, password: String): [User]
`;

const mutations = `
    
`;

module.exports = { types, queries, mutations };