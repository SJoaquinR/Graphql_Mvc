import { buildSchema } from "graphql";

const userSchema = buildSchema(`
    type User {
        id: ID!
        name: String
        email: String
    }
    input UserInput {
        name: String
        email: String
    }
    type Query {
        getUsers: [User]
    }
    type Mutation {
        createUser(input: UserInput): User
        updateUser(input: UserInput): User
        deleteUser: [User]
    }
`);

export default userSchema;