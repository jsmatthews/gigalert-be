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
    signUpUser(email: String, password: String): User
`;

module.exports = { types, queries, mutations };