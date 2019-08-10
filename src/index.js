import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: "./src/graphql/schema.graphql",
    resolvers,
    introspection: true,
    playground: true
});

server.start(() => console.log("GraphQL Server Running"));
