import express from "express";
import { graphqlHTTP } from "express-graphql";

import UserController from "./src/controller/user.controller.js";
import UserSchema from "./src/graphql/user.schema.js";

const app = express();

app.use(express.static("public"));

app.use('/graphql', graphqlHTTP({
    schema: UserSchema,
    rootValue: {
        getUsers: UserController.getUsers,
        createUser: UserController.createUser,
        updateUser: UserController.updateUser,
        deleteUser: UserController.deleteUser
    },
    graphiql: true
}));


app.listen(8080, () => {
  console.log("Server is running on port 8080 http://localhost:8080");
});

/*
query {
   getUsers{
    id,
    name,
    email
  }
}

mutation {
   createUser(input: {
    name: "pepe",
    email: "mail@m.com"
  }){
    id,
    name
  }
}
*/ 